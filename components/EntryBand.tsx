import Link from "next/link";

export default function EntryBand() {
  return (
    <div id="apply" className="bg-orange py-10">
      <div className="container-fit flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <p className="text-base font-black text-white sm:text-xl">
          まずは求人内容をご確認のうえ、お気軽にエントリーください。
        </p>
        <Link
          href="#"
          className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-black text-orange transition hover:bg-slate-100 sm:text-base"
        >
          応募・詳細を見る
        </Link>
      </div>
    </div>
  );
}
