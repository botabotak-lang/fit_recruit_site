"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const TIMELINE = [
  {
    phase: "〜1年",
    headline: "一人前の技術者へ。現場を一人で回せる。",
    detail: "入社直後から約1年までの具体的な流れは、入社後の流れをご覧ください。",
  },
  {
    phase: "〜3年",
    headline: "リーダーとして、顧客の窓口になる。",
    detail: "依頼のヒアリング、見立て、提案の入口に立ち、折衝と現場をつなぎます。チーム内外の調整を担う重要なポジションです。",
  },
  {
    phase: "〜5年",
    headline: "幹部候補として、経営の隣で事業を動かす。",
    detail:
      "本人の適性や実績に応じ、採用・育成や事業判断にも関わっていただきます。数字と人を見ながら、会社の伸びしろを「自分ごと」として動かせる段階です。（※技術を極めたい方は、現場のプロフェッショナルとして活躍し続けるスペシャリストコースも選択可能です）",
  },
  {
    phase: "10年〜",
    headline: "この会社のかじ取りをしている。",
    detail: "事業の方向性と現場の両方に責任を持ち、次の世代へ渡す土台を作ります。FITが目指す規模へ、核の一人として経営に深く関わります。",
  },
];

export default function GrowthSection() {
  return (
    <section id="growth" className="section-fit bg-slate-50">
      <div className="container-fit">
        <h2>
          <span className="section-title-en">GROWTH</span>
          <span className="section-title-jp">キャリアの道筋</span>
        </h2>
        <p className="mt-5 text-sm leading-7 text-navy/90 sm:text-base">
          FITは
          <strong>事業を一緒に作る人材</strong>
          を探しています。意欲と成果がそろえば、裁量は短いスパンで広がります。
          <br />
          【キャリアパスのモデルケース】 ※本人の適性や希望、勤務評価に応じて、以下のようなステップアップが可能です。
        </p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/growth-ojt.webp"
            alt="先輩社員から技術を学ぶOJTシーン"
            width={1400}
            height={800}
            className="mt-6 h-56 w-full rounded-2xl object-cover sm:h-72"
          />
        </motion.div>

        <ol
          aria-label="キャリアの道筋（到達イメージ）"
          className="relative mt-8 space-y-5 before:absolute before:bottom-0 before:left-4 before:top-0 before:w-0.5 before:bg-orange/50 before:content-['']"
        >
          {TIMELINE.map((item, index) => (
            <motion.li
              key={item.phase}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              className="relative pl-10"
            >
              <span className="absolute left-2 top-6 h-4 w-4 rounded-full border-2 border-orange bg-white" />
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="text-lg font-black text-orange">{item.phase}</h3>
                <p className="mt-2 text-lg font-black text-navy">{item.headline}</p>
                <p className="mt-3 text-sm leading-7 text-navy/90 sm:text-base">
                  {index === 0 ? (
                    <>
                      入社直後から約1年までの具体的な流れは、
                      <Link href="#onboarding" className="font-bold text-orange underline">
                        入社後の流れ
                      </Link>
                      をご覧ください。
                    </>
                  ) : (
                    item.detail
                  )}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
        <p className="mt-6 text-sm leading-7 text-navy/90 sm:text-base">
          役割や待遇は、経験・適性・希望をふまえて面接で丁寧にすり合わせます。技術を極めたい方も、将来のリーダーを目指したい方も歓迎します。
        </p>
      </div>
    </section>
  );
}
