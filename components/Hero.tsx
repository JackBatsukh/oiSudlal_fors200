"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Draw subtle tree silhouettes
    const drawTree = (
      x: number,
      baseY: number,
      height: number,
      opacity: number,
    ) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.fillStyle = "#1a3d1a";
      // trunk
      ctx.fillRect(x - 2, baseY - height * 0.2, 4, height * 0.2);
      // canopy layers
      const layers = 3;
      for (let i = 0; i < layers; i++) {
        const layerH = height * 0.35;
        const layerY = baseY - height * 0.15 - i * layerH * 0.6;
        const layerW = height * 0.3 * (1 - i * 0.15);
        ctx.beginPath();
        ctx.moveTo(x, layerY - layerH);
        ctx.lineTo(x + layerW, layerY);
        ctx.lineTo(x - layerW, layerY);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    };

    // Draw forest silhouette
    const numTrees = Math.floor(canvas.width / 40);
    for (let i = 0; i < numTrees; i++) {
      const x = (i / numTrees) * canvas.width + 20;
      const height = 80 + Math.random() * 120;
      const opacity = 0.3 + Math.random() * 0.4;
      drawTree(x, canvas.height, height, opacity);
    }

    // Mist overlay
    const grad = ctx.createLinearGradient(
      0,
      canvas.height * 0.5,
      0,
      canvas.height,
    );
    grad.addColorStop(0, "rgba(10,15,8,0)");
    grad.addColorStop(1, "rgba(10,15,8,0.9)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  return (
    <section className='relative min-h-screen flex flex-col justify-center overflow-hidden'>
      {/* Background canvas */}
      <canvas ref={canvasRef} className='absolute inset-0 w-full h-full' />

      {/* Radial glow */}
      <div
        className='absolute inset-0'
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(45,106,45,0.25) 0%, transparent 65%)",
        }}
      />

      {/* Tree rings decorative */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
        {[200, 350, 500, 650, 800].map((size, i) => (
          <div
            key={i}
            className='tree-ring absolute -translate-x-1/2 -translate-y-1/2'
            style={{ width: size, height: size, opacity: 0.08 - i * 0.01 }}
          />
        ))}
      </div>

      {/* Navigation bar */}
      <nav
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className='absolute top-0 left-0 right-0 flex justify-between items-center px-8 py-6 z-50 cursor-pointer
           bg-gradient-to-b from-[#0a0f08]/90 via-[#0a0f08]/60 to-transparent
           backdrop-blur-md border-b border-green-900/20'
      >
        <div className='tag'>FORS200</div>
        <div className='flex items-center gap-6'>
          <div className='tag'>Ой судлал</div>
        </div>
      </nav>

      <div className='flex items-center justify-center gap-6 mt-20'>
        <img
          src='./images/num-logo.png'
          alt='Монгол улсын их сургууль лого'
          className='h-24 object-contain'
        />
      </div>
      {/* Main content */}
      <div className='relative z-10 px-8 md:px-16 lg:px-24 pt-20'>
        {/* Mongolia University label */}
        <div
          className='flex items-center gap-4 mb-4 animate-fade-up'
          style={{ animationDelay: "0.05s", opacity: 0 }}
        >
          <div className='w-12 h-px bg-green-500/50' />
          <span className='font-mono font-bold text-xl text-white-400/70 tracking-widest uppercase'>
            Монгол улсын их сургууль · Ой судлал хичээлийн тайлан вебсайт
          </span>
        </div>

        {/* Overline */}
        <div
          className='flex items-center gap-4 mb-8 animate-fade-up'
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          <div className='w-12 h-px bg-green-500/60' />
          <span className='font-mono text-xs text-green-400/80 tracking-widest uppercase'>
            Ой судлалын үндэс · FORS200
          </span>
        </div>

        {/* Title */}
        <h1
          className='font-display text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-6
                       animate-fade-up'
          style={{ animationDelay: "0.25s", opacity: 0 }}
        >
          <span className='block text-cream'>The State of</span>
          <span className='block text-cream'>the World's</span>
          <em
            className='block italic'
            style={{
              background: "linear-gradient(135deg, #7ec87e, #c9a84c)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Forests
          </em>
        </h1>

        {/* Subtitle */}
        <div
          className='flex items-start gap-8 mt-8 animate-fade-up'
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          <div className='w-1 bg-green-600/60 self-stretch min-h-[60px]' />
          <div>
            <p className='font-mono text-sm text-green-300/70 leading-relaxed max-w-lg'>
              Инновацийн тусламжтайгаар ойн салбарын ирээдүйг бүтээх —<br />
              хамгаалал, нөхөн сэргээлт, тогтвортой ашиглалт
            </p>
            <p className='font-mono text-xs text-green-400/40 mt-3 tracking-wider'>
              INNOVATION FOR FORESTS & PEOPLE
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className='absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                        animate-fade-up'
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          <span className='font-mono text-xs text-green-400/40 tracking-widest'>
            доош гүйлгээрэй
          </span>
          <div className='w-px h-12 bg-gradient-to-b from-green-500/40 to-transparent animate-float' />
        </div>
      </div>

      {/* Side label */}
      <div
        className='absolute right-6 top-1/2 -translate-y-1/2 vertical-text font-mono text-xs
                      text-green-400/30 tracking-widest hidden lg:block'
      >
        SOFO 2024 · FAO PUBLICATION
      </div>

      <div className='glow-line absolute bottom-0 left-0 right-0' />
    </section>
  );
}
