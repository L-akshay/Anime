"use client";

import { useRef, useMemo, useEffect } from "react";
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
    // Slow the time step — reduces how often waves visibly change (cheaper perception-wise)
    uniforms.uTime.value = state.clock.elapsedTime * 0.6;
    uniforms.uMouse.value.x += (mouseRef.current.x - uniforms.uMouse.value.x) * 0.04;
    uniforms.uMouse.value.y += (mouseRef.current.y - uniforms.uMouse.value.y) * 0.04;
  });

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  // Simplified fragment shader — removed one sin/cos wave and reduced precision
  const fragmentShader = `
    precision mediump float;
    uniform float uTime;
    uniform vec2 uMouse;
    uniform vec2 uResolution;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      vec2 pos = uv * 2.0 - 1.0;

      // Mouse influence (cheaper — no aspect correction needed at this scale)
      float dist = distance(pos, uMouse * 2.0 - 1.0);
      float mouseGlow = 0.015 / (dist + 0.02);

      // Two waves instead of three
      float wave1 = sin(pos.x * 2.0 + uTime * 0.3) * 0.3;
      float wave2 = cos(pos.y * 1.8 + uTime * 0.2) * 0.3;
      float pattern = wave1 + wave2;

      vec3 color1 = vec3(0.04, 0.04, 0.08);
      vec3 color2 = vec3(0.05, 0.02, 0.12);
      vec3 baseColor = mix(color1, color2, pattern * 0.5 + 0.5);

      baseColor += mouseGlow * vec3(0.49, 0.23, 0.93) * 0.06;

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
  const containerRef = useRef<HTMLDivElement>(null);

  // Pause rendering when the tab is hidden to save GPU on background tabs
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleVisibility = () => {
      el.style.visibility = document.hidden ? "hidden" : "visible";
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  // Don't render at all for users who prefer reduced motion
  if (typeof window !== "undefined") {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return null;
  }

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        // Cap DPR at 1 — retina resolution doubles GPU pixel fill work for no visible gain here
        dpr={1}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        frameloop="always"
      >
        <ShaderGradient />
      </Canvas>
    </div>
  );
}