import type { Metadata } from "next";
import { Noto_Sans_JP, Oswald } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://recruit.fit-ec.jp"),
  title: "採用情報｜有限会社エフアイティ",
  description:
    "経験者も未経験も、ここから育てる。静岡県焼津市で、船舶通信機器・航海計器のプロを募集しています。",
  openGraph: {
    title: "採用情報｜有限会社エフアイティ",
    description:
      "船舶業界の未来のために、あなたの力が必要だ。地元で一流の技術者へ。",
    url: "https://recruit.fit-ec.jp",
    siteName: "有限会社エフアイティ 採用サイト",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.variable} ${oswald.variable}`}>{children}</body>
    </html>
  );
}
