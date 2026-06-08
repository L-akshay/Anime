"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ShaderGradient() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uResolution: {
        value: new THREE.Vector2(
          typeof window !== "undefined" ? window.innerWidth : 1920,
          typeof window !== "undefined" ? window.innerHeight : 1080
        ),
      },
    }),
    []
  );

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime;
    uniforms.uMouse.value.x += (mouseRef.current.x - uniforms.uMouse.value.x) * 0.05;
    uniforms.uMouse.value.y += (mouseRef.current.y - uniforms.uMouse.value.y) * 0.05;
  });

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform vec2 uResolution;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      float aspect = uResolution.x / uResolution.y;
      vec2 pos = uv * 2.0 - 1.0;
      pos.x *= aspect;

      // Mouse influence
      vec2 mouse = uMouse * 2.0 - 1.0;
      mouse.x *= aspect;

      float dist = distance(pos, mouse);
      float mouseGlow = 0.02 / (dist + 0.02);

      // Animated waves
      float wave1 = sin(pos.x * 2.0 + uTime * 0.3) * 0.3;
      float wave2 = cos(pos.y * 1.8 + uTime * 0.2) * 0.3;
      float wave3 = sin((pos.x + pos.y) * 1.5 + uTime * 0.4) * 0.2;

      float pattern = wave1 + wave2 + wave3;

      // Colors
      vec3 color1 = vec3(0.04, 0.04, 0.08); // deep navy-black
      vec3 color2 = vec3(0.05, 0.02, 0.12); // deep violet-black
      vec3 sakura = vec3(1.0, 0.42, 0.62);  // sakura pink
      vec3 violet = vec3(0.49, 0.23, 0.93); // violet

      vec3 baseColor = mix(color1, color2, pattern * 0.5 + 0.5);

      // Add mouse glow
      baseColor += mouseGlow * vec3(0.49, 0.23, 0.93) * 0.08;

      // Subtle sakura tint
      float sakuraTint = sin(uTime * 0.1 + pos.x * 3.0) * 0.5 + 0.5;
      baseColor += sakura * sakuraTint * 0.02;

      // Vignette
      float vignette = 1.0 - length(pos * 0.6);
      baseColor *= vignette;

      gl_FragColor = vec4(baseColor, 1.0);
    }
  `;

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function ShaderBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 2]}
        gl={{ antialias: false, alpha: true }}
      >
        <ShaderGradient />
      </Canvas>
    </div>
  );
}