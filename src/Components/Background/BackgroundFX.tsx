import ParticleNetwork from "./ParticleNetwork";

/**
 * Global ambient background: a drifting node network, a few gold glow orbs,
 * and a faint scanning light band. Fixed behind every route so it stays put
 * while content scrolls over it — meant to read as "engineered system", not
 * decoration, so everything stays low-opacity and subtle.
 *
 * `motion-reduce:animate-none` on the CSS-animated layers respects
 * prefers-reduced-motion; ParticleNetwork handles that preference itself.
 */
export default function BackgroundFX() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-background"
    >
      <ParticleNetwork />

      {/* Drifting gold glow orbs. */}
      <div className="motion-reduce:animate-none absolute left-[12%] top-[10%] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#B8860B] opacity-20 blur-3xl animate-glow-a" />
      <div className="motion-reduce:animate-none absolute right-[10%] top-[42%] h-[24rem] w-[24rem] translate-x-1/2 rounded-full bg-[#B8860B] opacity-20 blur-3xl animate-glow-b" />
      <div className="motion-reduce:animate-none absolute bottom-[8%] left-[55%] h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-[#B8860B] opacity-10 blur-3xl animate-glow-c" />

      {/* Faint scanning light band. */}
      <div className="motion-reduce:animate-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-transparent via-[#B8860B]/5 to-transparent animate-scan" />
    </div>
  );
}
