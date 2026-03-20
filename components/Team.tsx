'use client';

const members = [
  {
    name: 'Б.Баяржавхлан',
    id: '22B1NUM0206',
    role: 'Программ хангамж',
    color: '#7ec87e',
    initial: 'Б',
  },
  {
    name: 'С.Уужимсанаа',
    id: '24B1NUM2418',
    role: 'Санхүү, Банк',
    color: '#c9a84c',
    initial: 'У',
  },
  {
    name: 'А.Наранмандах',
    id: '23B1NUM1251',
    role: 'Эрх зүй',
    color: '#7ec87e',
    initial: 'Н',
  },
];

export default function Team() {
  return (
    <section className="relative py-24 px-8 md:px-16 lg:px-24"
      style={{ background: '#080d06' }}>
      <div className="section-number">04</div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
        <div>
          <div className="tag mb-4">Судалгааны баг</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Багийн <em className="italic text-green-400">гишүүд</em>
          </h2>
        </div>
        <div className="text-right">
          <p className="font-mono text-xs text-white/30">Ой судлалын үндэс</p>
          <p className="font-mono text-xs text-white/20">FORS200 · 2026 он</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {members.map((m, i) => (
          <div key={i} className="card-hover border border-white/5 p-8 relative overflow-hidden group"
            style={{ background: 'rgba(255,255,255,0.015)', animationDelay: `${i * 0.1}s` }}>

            {/* Avatar ring */}
            <div className="relative w-20 h-20 mb-8">
              {[1, 2, 3].map((r) => (
                <div key={r} className="absolute inset-0 rounded-full border transition-all duration-500"
                  style={{
                    borderColor: `${m.color}${20 + r * 10}`,
                    transform: `scale(${1 + r * 0.15})`,
                  }} />
              ))}
              <div className="w-20 h-20 rounded-full flex items-center justify-center relative z-10"
                style={{ background: `${m.color}18`, border: `1px solid ${m.color}40` }}>
                <span className="font-display text-3xl font-black" style={{ color: m.color }}>
                  {m.initial}
                </span>
              </div>
            </div>

            {/* Info */}
            <h3 className="font-display text-2xl font-bold mb-2">{m.name}</h3>
            <div className="tag mb-4" style={{ borderColor: `${m.color}40`, color: m.color }}>
              {m.role}
            </div>
            <p className="font-mono text-xs text-white/25 tracking-widest">{m.id}</p>

            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `radial-gradient(ellipse at 30% 30%, ${m.color}06 0%, transparent 60%)` }} />

            {/* Bottom line */}
            <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px transition-all duration-500"
              style={{ background: m.color }} />
          </div>
        ))}
      </div>

      <div className="glow-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}
