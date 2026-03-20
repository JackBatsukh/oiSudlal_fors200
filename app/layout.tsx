import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The State of the World\'s Forests 2024 — FORS200',
  description: 'Ой судлалын үндэс хичээлийн судалгааны тайлан. FAO SOFO 2024.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mn">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Noto+Sans+Mongolian&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
