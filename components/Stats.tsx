'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    value: 4.1,
    unit: "тэрбум",
    label: "Дэлхийн нийт ойн талбай",
    sub: "га",
    accent: "#7ec87e",
  },
  {
    value: 8,
    unit: "орчим хувь",
    label: "Монголд нийт нутгийн ойн талбай",
    sub: "",
    accent: "#7ec87e",
  },
  {
    value: 10,
    unit: "сая га",
    label: "Жил бүр алдагдах ой",
    sub: "жилд",
    accent: "#c9a84c",
  },
  {
    value: 1.6,
    unit: "тэрбум",
    label: "Дэлхийд ойгоос амьжиргаа залгуулдаг хүмүүс",
    sub: "хүн",
    accent: "#7ec87e",
  },
  {
    value: 80,
    unit: "%",
    label: "Газрын бүх амьтдын амьдрах орчин",
    sub: "биологийн олон янз",
    accent: "#c9a84c",
  },
];

function CountUp({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = Date.now();
        const tick = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(parseFloat((eased * target).toFixed(1)));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Stats() {
  return (
    <section className="relative py-24 px-8 md:px-16 lg:px-24 gradient-bg">
      <div className="section-number">01</div>

      <div className="mb-16">
        <div className="tag mb-4">Тоон мэдээлэл</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Дэлхийн ойн <em className="italic text-green-400">байдал</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="card-hover border border-white/5 p-8 relative overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.02)' }}>
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-16 h-16 opacity-5 rounded-full -translate-y-4 translate-x-4"
              style={{ background: stat.accent, filter: 'blur(20px)', transform: 'scale(3)' }} />

            {/* Number */}
            <div className="stat-number text-5xl md:text-6xl mb-1">
              <CountUp target={stat.value} />
            </div>
            <div className="font-mono text-xs tracking-wider mb-4"
              style={{ color: stat.accent }}>
              {stat.unit} <span className="text-white/30">/ {stat.sub}</span>
            </div>

            {/* Label */}
            <p className="font-mono text-xs text-white/50 leading-relaxed">{stat.label}</p>

            {/* Bottom line */}
            <div className="absolute bottom-0 left-0 right-0 h-px"
              style={{ background: `linear-gradient(90deg, ${stat.accent}40, transparent)` }} />
          </div>
        ))}
      </div>

      {/* Decorative grid */}
      <div className="absolute inset-0 pointer-events-none opacity-3"
        style={{
          backgroundImage: 'linear-gradient(rgba(74,158,74,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(74,158,74,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

      <div className="glow-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}
