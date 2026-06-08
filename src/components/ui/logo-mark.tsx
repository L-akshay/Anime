interface LogoMarkProps {
  className?: string;
  /** number of radiating spokes */
  spokes?: number;
}

/**
 * The Neuroblastism starburst mark — a fine radiating asterisk/sparkle
 * inspired by a neuron firing. Uses currentColor so it inherits text color.
 */
export default function LogoMark({ className, spokes = 12 }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {Array.from({ length: spokes }).map((_, i) => {
        const angle = (i * (360 / spokes) * Math.PI) / 180;
        const inner = 2.4;
        const outer = i % 2 === 0 ? 11 : 8.5;
        const x1 = 12 + Math.cos(angle) * inner;
        const y1 = 12 + Math.sin(angle) * inner;
        const x2 = 12 + Math.cos(angle) * outer;
        const y2 = 12 + Math.sin(angle) * outer;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}
