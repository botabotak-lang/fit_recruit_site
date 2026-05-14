"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/90 backdrop-blur">
      <div className="container-fit flex h-16 items-center justify-between">
        <Link href="https://fit-ec.jp" aria-label="有限会社エフアイティ トップへ">
          <Image
            src="/images/fv-logo.png"
            alt="有限会社エフアイティ"
            width={160}
            height={64}
            priority
          />
        </Link>

        <nav aria-label="ヘッダーナビゲーション" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm font-bold text-white">
            <li>
              <Link href="https://fit-ec.jp" className="hover:text-orange">
                ホーム
              </Link>
            </li>
            <li>
              <Link href="https://fit-ec.jp/service" className="hover:text-orange">
                業務内容
              </Link>
            </li>
            <li>
              <Link href="https://fit-ec.jp/company" className="hover:text-orange">
                会社概要
              </Link>
            </li>
            <li>
              <Link
                href="#jobs"
                className="rounded-full bg-orange px-4 py-2 text-white transition hover:brightness-110"
              >
                採用情報
              </Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="rounded-md border border-white/30 p-2 text-white md:hidden"
          aria-label="メニュー"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-5 bg-white" />
          <span className="my-1 block h-0.5 w-5 bg-white" />
          <span className="block h-0.5 w-5 bg-white" />
        </button>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
