'use client';
import { useState } from 'react';

const professions = [
  {
    id: 'software',
    tag: 'Программ хангамж',
    icon: '{ }',
    color: '#7ec87e',
    title: 'Технологи ба байгаль орчин',
    subtitle: 'Climate Tech · GeoSpatial · AI for Sustainability',
    summary: 'Ойг хамгаалахад дижитал хэрэгсэл зайлшгүй хэрэгтэй. Хиймэл дагуулын зураг ашиглан ой устгал илрүүлэх, түймрийн эрсдэлийг өгөгдлөөр тооцоолох, мөн манай сайт шиг ойн мэдээллийн платформ бүтээж олон нийтэд түгээх зэрэг нь программ хангамжийн ажил.',
    points: [
      'Хиймэл дагуулын зурагт суурилсан ой хяналтын систем',
      'Түймрийн эрсдэлийн урьдчилан таамаглах AI загвар',
      'Environmental data systems & dashboards',
    ],
    conclusion: 'Программ хангамжийн мэргэжилтэн зөвхөн банк, апп дээр ажиллах албагүй — байгаль орчны бодит асуудлыг шийдэх хэрэгсэл болж чадна.',
  },
  {
    id: 'law',
    tag: 'Эрх зүй',
    icon: '§',
    color: '#c9a84c',
    title: 'Хууль ба байгаль хамгаалал',
    subtitle: 'Environmental Law · Policy · Governance',
    summary: 'Ойг хамгаалах асуудал нь хууль, бодлого, өмчийн харилцаа, хариуцлага, зохицуулалтын асуудал. Сайн хууль байхгүй бол сайн технологи ч үр дүнгүй байж болно.',
    points: [
      'Хууль бус мод бэлтгэл, газар ашиглалтын зөрчилд хариуцлага',
      'Орон нутгийн иргэд, уугуул бүлгүүдийн эрхийг хамгаалах',
      'Нүүрстөрөгчийн зах зээл, ногоон санхүүжилтийн зохицуулалт',
      'Байгаль орчны компаний хариуцлагын хуулийн механизм',
    ],
    conclusion: 'Ойн тогтвортой ирээдүйг зөвхөн мод тарьж биш, бас зөв хууль, зөв бодлогоор бий болгоно.',
  },
  {
    id: 'finance',
    tag: 'Санхүү, Банк',
    icon: '₮',
    color: '#7ec87e',
    title: 'Ногоон санхүүжилт',
    subtitle: 'Green Finance · ESG · Sustainable Investment',
    summary: 'Ой хамгаалал, нөхөн сэргээлт нь хөрөнгө оруулалт, эрсдэлийн үнэлгээ, санхүүгийн зөв бүтэц шаарддаг. Санхүүгийн байгууллага нийгэм, байгаль орчинд маш том нөлөө үзүүлдэг.',
    points: [
      'Байгальд ээлтэй төслүүдэд ногоон зээл, тогтвортой бонд',
      'ESG үзүүлэлтээр компаниудыг үнэлэх',
      'Ойн доройтлоос үүсэх санхүүгийн эрсдэлийн тооцоо',
      'Нүүрстөрөгчтэй холбоотой шинэ санхүүгийн хэрэгслүүд',
    ],
    conclusion: 'Санхүү бол зөвхөн мөнгөний хэрэгсэл биш — тогтвортой хөгжлийг хөдөлгөх хүч юм.',
  },
];

export default function Professions() {
  const [active, setActive] = useState('software');
  const prof = professions.find(p => p.id === active)!;

  return (
    <section className="relative py-24 px-8 md:px-16 lg:px-24 gradient-bg">
      <div className="section-number">03</div>

      <div className="tag mb-4">Мэргэжилтэй холболт</div>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
        Миний <em className="italic text-green-400">мэргэжил</em> ба ой
      </h2>

      {/* Tab selector */}
      <div className="flex flex-wrap gap-3 mb-12">
        {professions.map(p => (
          <button key={p.id}
            onClick={() => setActive(p.id)}
            className="font-mono text-xs px-6 py-3 transition-all duration-300 border"
            style={{
              borderColor: active === p.id ? p.color : 'rgba(255,255,255,0.1)',
              background: active === p.id ? `${p.color}15` : 'transparent',
              color: active === p.id ? p.color : 'rgba(255,255,255,0.4)',
            }}>
            <span className="mr-2 opacity-60">{p.icon}</span>
            {p.tag}
          </button>
        ))}
      </div>

      {/* Content panel */}
      <div key={active} className="border border-white/5 p-8 md:p-12 relative overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.02)', animation: 'fadeUp 0.5s ease forwards' }}>

        {/* Decorative icon */}
        <div className="absolute top-8 right-8 font-display text-8xl font-black opacity-5"
          style={{ color: prof.color }}>{prof.icon}</div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <div className="tag mb-4" style={{ borderColor: prof.color, color: prof.color }}>
              {prof.tag}
            </div>
            <h3 className="font-display text-3xl font-bold mb-2">{prof.title}</h3>
            <p className="font-mono text-xs mb-6" style={{ color: prof.color }}>{prof.subtitle}</p>
            <p className="font-mono text-xs text-white/50 leading-relaxed mb-8">{prof.summary}</p>

            {/* Conclusion box */}
            <div className="border-l-2 pl-6 py-2"
              style={{ borderColor: prof.color }}>
              <p className="font-mono text-xs leading-relaxed" style={{ color: prof.color }}>
                {prof.conclusion}
              </p>
            </div>
          </div>

          {/* Right - bullet points */}
          <div>
            <p className="font-mono text-xs text-white/30 mb-6 tracking-widest uppercase">
              Практик холболт
            </p>
            <div className="flex flex-col gap-4">
              {prof.points.map((point, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="mt-1 w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0
                                  transition-all duration-300"
                    style={{ borderColor: `${prof.color}40`, color: prof.color }}>
                    <span className="font-mono text-xs">{i + 1}</span>
                  </div>
                  <p className="font-mono text-xs text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, ${prof.color}40, transparent)` }} />
      </div>

      <div className="glow-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}
