"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const DAY_FLOW = [
  "8:00 出社。今日の訪問先と段取りを確認し、すぐに動ける状態に整える。",
  "8:10〜9:00 清水港へ移動。次の現場がだんだん近づいてくる。",
  "9:00〜11:30 清水の顧客の船に乗船。点検・修理を実施。港と船が、仕事場になる。",
  "12:00〜13:00 清水港付近で海鮮ランチ。港町ならではの、短いご褒美時間。",
  "13:00〜14:00 焼津港へ移動。午後の顔合わせに向けて切り替える。",
  "14:00〜16:00 焼津の顧客の船で新商品の納品・設置。電源投入、起動確認。画面が点いた瞬間の静かな達成感。",
  "16:30〜17:00 事務所に戻り、作業日報を記入して退社。日中のことを形にして一日を閉じる。",
];

export default function JobsSection() {
  return (
    <section id="jobs" className="section-fit">
      <div className="container-fit">
        <h2>
          <span className="section-title-en">POSITIONS</span>
          <span className="section-title-jp">募集職種</span>
        </h2>
        <p className="mt-5 text-sm leading-7 text-navy/90 sm:text-base">
          募集内容の詳細は、求人ページでご確認ください。気になる点は面接前のお問い合わせも歓迎します。
        </p>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45 }}
          className="mt-8 rounded-2xl border border-navy/10 bg-white p-6 shadow-card"
        >
          <h3 className="text-2xl font-black text-navy">技術職</h3>
          <p className="mt-3 text-base font-bold text-orange">
            船上・港で、通信機器と航海計器のプロとして活躍するポジションです。
          </p>
          <p className="mt-3 text-sm leading-7 text-navy/90 sm:text-base">
            船舶通信機器・航海計器の保守点検、修理、設置工事など。経験者・未経験者ともに歓迎です。
          </p>
          <p className="mt-2 text-sm leading-7 text-navy/90 sm:text-base">
            仕事内容や条件の詳細は、求人ページでご確認ください。
          </p>
          <Link
            href="#"
            className="mt-5 inline-flex rounded-full bg-orange px-6 py-3 text-sm font-black text-white transition hover:brightness-110"
          >
            求人の詳細を見る
          </Link>

          <div className="mt-8" aria-label="ある1日の流れ">
            <p className="text-lg font-black text-navy">ある1日の流れ</p>
            <ol className="mt-4 space-y-3">
              {DAY_FLOW.map((item) => {
                const splitIndex = item.indexOf(" ");
                const time = item.slice(0, splitIndex);
                const text = item.slice(splitIndex + 1);
                return (
                  <li key={item} className="flex gap-3 rounded-lg bg-slate-50 p-3 text-sm leading-7 sm:text-base">
                    <span className="min-w-20 font-black text-orange">{time}</span>
                    <span className="text-navy/90">{text}</span>
                  </li>
                );
              })}
            </ol>
            <p className="mt-4 text-xs leading-6 text-navy/70 sm:text-sm">
              ※訪問先・作業内容・所要時間は日によって異なります。あくまで一例です。
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
