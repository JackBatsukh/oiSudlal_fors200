export default function Footer() {
  return (
    <footer className="py-16 px-8 md:px-16 lg:px-24 border-t border-white/5"
      style={{ background: '#060a05' }}>
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <div className="font-display text-2xl font-black mb-2">
            <span style={{ color: '#7ec87e' }}>МУИС</span>
            <span className="text-white/60"> 2026</span>
          </div>
          <p className="font-mono text-xs text-white/25 max-w-xs leading-relaxed">
            The State of the World's Forests 2024 — FAO, United Nations.
            Ой судлалын үндэс|FORS200 хичээлийн судалгааны тайлан.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-right">
          <p className="font-mono text-xs text-white/15">
            Инновацийн тусламжтайгаар ойг хамгаал
          </p>
        </div>
      </div>

      {/* Bottom tagline */}
      <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-4">
        <div className="w-8 h-px bg-green-600/40" />
        <p className="font-mono text-xs text-white/15 tracking-widest uppercase">
          Монгол улсын их сургууль · FORS200 · 2026 он
        </p>
      </div>
    </footer>
  );
}
