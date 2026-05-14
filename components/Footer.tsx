import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy py-14 text-white">
      <div className="container-fit">
        <h2>
          <span className="section-title-en">CONTACT</span>
          <span className="text-3xl font-black text-white sm:text-4xl">お問い合わせ</span>
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div>
            <p className="text-lg font-black">有限会社エフアイティ</p>
            <p className="mt-3 text-xl font-black">
              <a href="tel:054-628-6378" className="hover:text-orange">
                054-628-6378
              </a>
            </p>
            <p className="mt-3 text-sm leading-7 sm:text-base">
              〒425-0021
              <br />
              静岡県焼津市中港2丁目2−15
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/20" aria-label="所在地の地図">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.416268091352!2d138.323464!3d34.87089199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601a4606ae0a212d%3A0x9ed8616f7ac6ebbc!2z77yI5pyJ77yJ44Ko44OV44Ki44Kk44OG44Kj!5e0!3m2!1sja!2sjp!4v1776669147041!5m2!1sja!2sjp"
              title="有限会社エフアイティの地図"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full"
            />
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-6">
          <nav className="flex flex-wrap gap-4 text-sm font-bold">
            <Link href="https://fit-ec.jp" className="hover:text-orange">
              トップ
            </Link>
            <Link href="https://fit-ec.jp/service" className="hover:text-orange">
              業務内容
            </Link>
            <Link href="https://fit-ec.jp/company" className="hover:text-orange">
              会社概要
            </Link>
            <Link href="https://recruit.fit-ec.jp" className="hover:text-orange">
              採用情報
            </Link>
          </nav>
          <p className="mt-4 text-xs text-white/80 sm:text-sm">© 2026 有限会社エフアイティ All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
