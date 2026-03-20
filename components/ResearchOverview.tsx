'use client';

const chapters = [
  {
    num: '1',
    tag: 'Бүлэг 1',
    color: 'green',
    body: (
      <>
        Ой бол уур амьсгал, биологийн олон янз байдал, усны эргэлт, хүнсний аюулгүй байдлын{' '}
        <span className="text-green-400/70">стратегийн нөөц</span> — зөвхөн мод биш
      </>
    ),
  },
  {
    num: '2',
    tag: 'Бүлэг 2',
    color: 'gold',
    body: (
      <>
        Ой устгал зарим бүс нутагт саарсан ч дэлхийн ой{' '}
        <span className="text-yellow-400/70">шинэ дарамтад</span> орж байна — түймэр, ган, хэт
        халалт, мод болон ойн бүтээгдэхүүний өсөн нэмэгдэж буй эрэлт
      </>
    ),
  },
  {
    num: '3',
    tag: 'Бүлэг 3',
    color: 'green',
    body: (
      <>
        Инновац гэдэг нь зөвхөн технологи биш —{' '}
        <span className="text-green-400/70">бодлого, институц, санхүүжилт, нийгмийн</span>{' '}
        шинэчлэлийг хамтад нь агуулна
      </>
    ),
  },
  {
    num: '4',
    tag: 'Бүлэг 4',
    color: 'gold',
    body: (
      <>
        <span className="text-yellow-400/70">18 кейс судалгаа</span> — дрон, дижитал хяналт,
        алсын зайн тандалт, орон нутгийн менежмент зэрэг бодит жишээнүүд
      </>
    ),
  },
  {
    num: '5',
    tag: 'Бүлэг 5',
    color: 'green',
    body: (
      <>
        Инновацыг <span className="text-green-400/70">хариуцлагатай, хүртээмжтэй</span>{' '}
        өргөжүүлэх — бодлого, санхүүжилт, чадавх, хамтын ажиллагаа, эмзэг бүлгүүдийн оролцоо
      </>
    ),
  },
];

const bottomCards = [
  {
    dotColor: '#4a9e4a',
    label: 'Судалгааны асуудал',
    title: 'Ойг хамгаалах ба хүний хэрэгцээ — хоёрын зөрчил',
    body: 'Ой устгалын хурд саарч байгаа ч уур амьсгалын өөрчлөлт, мод болон ойн бус бүтээгдэхүүний өсөн нэмэгдэж буй эрэлт нь ойд хүчтэй дарамт үзүүлсээр байна. Уламжлалт аргаар энэ дарамтыг даван туулах боломжгүй болсон — инновацын шинэ арга барил шаардлагатай.',
    accentColor: 'rgba(74,158,74,0.25)',
    borderColor: 'rgba(74,158,74,0.08)',
    hoverBorder: 'rgba(74,158,74,0.3)',
    labelColor: '#4a9e4a',
  },
  {
    dotColor: '#c9a84c',
    label: 'Арга зүй',
    title: '18 кейс + олон эх сурвалжийн нэгтгэл',
    body: 'FAO-гийн өмнөх хэвлэлүүд, эрдэм шинжилгээний бүтээл, мэргэжилтнүүдтэй хийсэн ярилцлага, модны эрэлтийн шинжилгээ болон дэлхийн өнцөг булан бүрээс авсан 18 бодит кейс судалгаад тулгуурласан өргөн хүрээний дүн шинжилгээ.',
    accentColor: 'rgba(201,168,76,0.25)',
    borderColor: 'rgba(201,168,76,0.08)',
    hoverBorder: 'rgba(201,168,76,0.3)',
    labelColor: '#c9a84c',
    highlight: '18 бодит кейс судалгаа',
    highlightColor: 'rgba(232,201,122,0.7)',
  },
];

export default function ResearchOverview() {
  return (
    <section
      className="relative py-24 px-8 md:px-16 lg:px-24"
      style={{
        background: 'linear-gradient(180deg, #0a0f08 0%, #0c1409 100%)',
      }}
    >
      {/* Section number */}
      <div className="section-number">02</div>

      {/* Header */}
      <div className="mb-16">
        <div className="tag mb-4">Судалгааны агуулга</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
          Судалгаа{' '}
          <em className="italic text-green-400">юу хийсэн бэ?</em>
        </h2>
      </div>

      {/* Chapters grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {chapters.map((ch) => {
          const isGold = ch.color === 'gold';
          const borderBase = isGold ? 'rgba(201,168,76,0.12)' : 'rgba(74,158,74,0.12)';
          const accentText = isGold ? '#c9a84c' : '#4a9e4a';
          const glowColor = isGold ? 'rgba(201,168,76,0.25)' : 'rgba(74,158,74,0.25)';
          const bigNumColor = isGold ? 'rgba(201,168,76,0.06)' : 'rgba(74,158,74,0.06)';

          return (
            <div
              key={ch.num}
              className="card-hover border p-6 relative overflow-hidden cursor-default"
              style={{
                borderColor: borderBase,
                background: 'rgba(255,255,255,0.015)',
              }}
            >
              {/* Ghost number */}
              <div
                className="font-display font-black absolute top-[-8px] right-2 text-7xl leading-none pointer-events-none"
                style={{ color: bigNumColor }}
              >
                {ch.num}
              </div>

              {/* Tag label */}
              <div
                className="font-mono text-[0.55rem] tracking-widest uppercase mb-3"
                style={{ color: accentText }}
              >
                {ch.tag}
              </div>

              {/* Body */}
              <p className="font-mono text-xs text-white/50 leading-relaxed">{ch.body}</p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{
                  background: `linear-gradient(90deg, ${glowColor}, transparent)`,
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Problem + Method */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bottomCards.map((card, i) => (
          <div
            key={i}
            className="card-hover border p-9 relative overflow-hidden"
            style={{
              borderColor: card.borderColor,
              background: 'rgba(255,255,255,0.015)',
            }}
          >
            {/* Dot label row */}
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: card.labelColor }}
              />
              <span
                className="font-mono text-[0.55rem] tracking-widest uppercase"
                style={{ color: card.labelColor }}
              >
                {card.label}
              </span>
            </div>

            <h3 className="font-display text-xl font-bold mb-4 leading-snug">
              {card.title}
            </h3>

            <p className="font-mono text-xs text-white/45 leading-relaxed">
              {card.highlight
                ? card.body.replace(
                    card.highlight,
                    `__HIGHLIGHT__`
                  )
                    .split('__HIGHLIGHT__')
                    .map((part, j, arr) =>
                      j < arr.length - 1 ? (
                        <span key={j}>
                          {part}
                          <span style={{ color: card.highlightColor }}>
                            {card.highlight}
                          </span>
                        </span>
                      ) : (
                        <span key={j}>{part}</span>
                      )
                    )
                : card.body}
            </p>

            {/* Bottom gradient line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-px"
              style={{
                background: `linear-gradient(90deg, ${card.accentColor}, transparent)`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="glow-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}
