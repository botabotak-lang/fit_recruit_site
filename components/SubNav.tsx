import Link from "next/link";

const LINKS = [
  { href: "#evp", label: "働く魅力" },
  { href: "#onboarding", label: "入社後の流れ" },
  { href: "#growth", label: "キャリアの道筋" },
  { href: "#video", label: "動画" },
  { href: "#numbers-fit", label: "数字で見るFIT" },
  { href: "#jobs", label: "募集職種" },
  { href: "#faq", label: "よくある質問" },
  { href: "#flow", label: "選考の流れ" },
];

export default function SubNav() {
  return (
    <nav
      aria-label="このページおよび会社概要へのナビゲーション"
      className="sticky top-16 z-30 border-y border-navy/10 bg-white/95 backdrop-blur"
    >
      <div className="container-fit overflow-x-auto">
        <div className="flex min-w-max items-center gap-2 py-3">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-full border border-navy/20 px-4 py-2 text-sm font-bold text-navy transition hover:border-orange hover:text-orange"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
