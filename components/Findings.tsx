'use client';

const findings = [
  {
    num: '01',
    title: 'Ой устгал саарч буй ч дарамт үргэлжилж байна',
    body: 'Зарим бүс нутагт ой устгал бага зэрэг саарч байгаа ч дэлхийн ой нийтдээ улам бүр дарамтад орж байна. Уур амьсгалын өөрчлөлттэй холбоотой түймэр, ган, хортон шавж, халуун стресст улам их өртөж байна.',
    icon: '🌳',
    color: '#7ec87e',
  },
  {
    num: '02',
    title: 'Инновац нь шийдвэрлэх хүчин зүйл',
    body: 'Технологийн, нийгмийн, бодлогын, институцийн, санхүүгийн инновацын хослол байж илүү өргөн хүрээний үр дүн гарна. Зөвхөн шинэ төхөөрөмж нэвтрүүлэх нь хангалтгүй.',
    icon: '💡',
    color: '#c9a84c',
  },
  {
    num: '03',
    title: 'Хариуцлагатай, хүртээмжтэй хэрэгжүүлэлт',
    body: 'Шинэ шийдэл болгон автоматаар бүх хүнд ашигтай байдаггүй. Тэгш хүртээмжтэй, жендэрийн мэдрэмжтэй арга хэрэгтэй. Орон нутгийн иргэд, уугуул бүлгүүдийн оролцоог хангах шаардлагатай.',
    icon: '⚖️',
    color: '#7ec87e',
  },
];

export default function Findings() {
  return (
    <section className="relative py-24 px-8 md:px-16 lg:px-24"
      style={{ background: 'linear-gradient(180deg, #0a0f08 0%, #0d1505 50%, #0a0f08 100%)' }}>
      <div className="section-number">03</div>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left sticky label */}
        <div className="lg:w-1/3">
          <div className="tag mb-4">Судалгааны үр дүн</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
            Гол <em className="italic text-green-400">дүгнэлт</em>
          </h2>
          <p className="font-mono text-xs text-white/40 leading-relaxed">
            SOFO 2024 тайлангийн гурван гол дүгнэлт нь дэлхийн ойн
            ирээдүйд чиглэсэн үйл ажиллагааны чиглэлийг тодорхойлж байна.
          </p>

          {/* Decorative element */}
          <div className="mt-12 relative w-32 h-32 hidden lg:block">
            {[32, 56, 80, 104, 128].map((size, i) => (
              <div key={i} className="absolute top-1/2 left-1/2 rounded-full border"
                style={{
                  width: size, height: size,
                  marginTop: -size/2, marginLeft: -size/2,
                  borderColor: `rgba(74,158,74,${0.15 - i * 0.02})`
                }} />
            ))}
            <div className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2"
              style={{ background: '#4a9e4a', boxShadow: '0 0 20px #4a9e4a' }} />
          </div>
        </div>

        {/* Right findings list */}
        <div className="lg:w-2/3 flex flex-col gap-8">
          {findings.map((f, i) => (
            <div key={i} className="card-hover group border border-white/5 p-8 relative overflow-hidden cursor-default"
              style={{ background: 'rgba(255,255,255,0.015)' }}>
              {/* Number overlay */}
              <div className="font-display font-black text-8xl absolute right-6 top-0 leading-none pointer-events-none"
                style={{ color: 'rgba(74,158,74,0.04)' }}>{f.num}</div>

              <div className="flex items-start gap-6">
                <div className="text-3xl mt-1 animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                  {f.icon}
                </div>
                <div className="flex-1">
                  <div className="font-mono text-xs mb-3" style={{ color: f.color }}>
                    — {f.num}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-4 leading-tight">{f.title}</h3>
                  <p className="font-mono text-xs text-white/50 leading-relaxed">{f.body}</p>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 20% 50%, ${f.color}08 0%, transparent 60%)` }} />
            </div>
          ))}
        </div>
      </div>

      <div className="glow-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}
