"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const FAQ_ITEMS: { q: string; a: React.ReactNode }[] = [
  {
    q: "未経験・異業界でも応募は可能ですか？",
    a: (
      <>
        船舶・無線の前職経験がなくても応募できます。技術・現場系の経験がある方向けと、未経験歓迎の2つの求人を用意しています。入社後はOJTと資格取得（費用は原則全額会社負担）で段階的に育成します。どちらに応募すべきか迷う場合は、お気軽にお問い合わせください（
        <a href="tel:080-3939-3028" className="font-bold text-orange underline">
          080-3939-3028
        </a>
        　担当：窪田）。
      </>
    ),
  },
  {
    q: "勤務地・転勤はありますか？ 出張や船に乗る仕事のイメージを教えてください。",
    a: (
      <>
        転勤はありません（拠点は焼津市中港）。顧客先の港・船・造船所などへ外出し、必要に応じて船上で作業します。作業エリアは
        <strong>主に静岡県内</strong>
        で、宿泊を伴う遠方出張はほぼありません（愛知県蒲郡市など日帰り案件が年数回程度あります）。流れの一例は技術職の「
        <Link href="#jobs" className="font-bold text-orange underline">
          ある1日の流れ
        </Link>
        」をご参照ください。
      </>
    ),
  },
  {
    q: "入社後の研修・育成（OJT や資格取得）はどのようになっていますか？",
    a: (
      <>
        先輩と現場を重ねながらOJTで担いを段階的に広げます。必要な資格の取得費用は原則全額会社負担です。詳しくは「
        <Link href="#onboarding" className="font-bold text-orange underline">
          入社後の流れ
        </Link>
        」をご覧ください。
      </>
    ),
  },
  {
    q: "応募方法と選考の流れを教えてください。",
    a: (
      <>
        Indeedの求人票からご応募ください。選考は「
        <Link href="#flow" className="font-bold text-orange underline">
          選考の流れ
        </Link>
        」のとおり、書類→面接（1〜2回、
        <strong>対面のみ</strong>
        ）→内定の流れです。お電話でのお問い合わせは{" "}
        <a href="tel:080-3939-3028" className="font-bold text-orange underline">
          080-3939-3028
        </a>{" "}
        （担当：窪田）でも受け付けています。
      </>
    ),
  },
  {
    q: "給与・賞与はどのように決まりますか？ 目安を教えてください。",
    a: (
      <>
        賞与は年4ヶ月分（前年度実績基準）です。試用期間（3ヶ月）も本採用と同条件です。月給・年収の目安は「
        <Link href="#numbers-fit" className="font-bold text-orange underline">
          数字で見るFIT
        </Link>
        」をご参照ください。評価の考え方はノルマ（件数）ではなく、新しい顧客・現場への積極的な姿勢やスキルアップへの意欲を重視します。査定の詳細は{" "}
        <strong>Indeed の募集要項</strong>
        および面接でご案内します。
      </>
    ),
  },
  {
    q: "学歴・文理に条件はありますか？",
    a: <>学歴・文理による採用条件はありません。これまでのご経験・意欲・当社との相性や理念への共感を、総合的に見て判断します。</>,
  },
  {
    q: "休日・勤務時間・残業のイメージを教えてください。",
    a: (
      <>
        勤務時間は8:00～17:00（変形労働時間制）。年間休日114日、週休二日制。月平均残業5時間、固定残業代なしです。有給休暇は
        <strong>入社半年後に10日付与</strong>
        、以降1年ごとに1日ずつ増加（最大40日）。最終的な労働条件は{" "}
        <strong>Indeed の募集要項</strong>
        をご確認ください。残業の目安は「
        <Link href="#numbers-fit" className="font-bold text-orange underline">
          数字で見るFIT
        </Link>
        」も併せてご覧ください。
      </>
    ),
  },
  {
    q: "面接ではどのような点を見ますか？ 準備のヒントがあれば教えてください。",
    a: (
      <>
        仕事への姿勢・価値観（やり切る・誠実にまっすぐ・現場の和）・一緒に働けるかを、双方向の対話で確認します。評価で重視するのは
        <strong>積極性</strong>
        です。新しい顧客や現場に「自分が行く」と手を挙げる姿勢、資格取得やメーカー研修への意欲が大きくプラスに働きます。ノルマのような数値基準はありません。応募者からのご質問も歓迎します。
      </>
    ),
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-fit bg-slate-50">
      <div className="container-fit">
        <h2>
          <span className="section-title-en">FAQ</span>
          <span className="section-title-jp">よくある質問</span>
        </h2>
        <p className="mt-5 text-sm leading-7 text-navy/90 sm:text-base">
          応募前に気になりやすい点をまとめました。その他のご質問も、面接やお問い合わせ時に遠慮なくお聞きください。
        </p>
        <div className="mt-8 space-y-3" aria-label="よくある質問一覧">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.article
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="overflow-hidden rounded-xl border border-navy/10 bg-white"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(index)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-bold text-navy sm:px-5 sm:text-base"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                  >
                    {item.q}
                    <span className="text-orange">{isOpen ? "−" : "+"}</span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`faq-panel-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <p className="px-4 pb-4 text-sm leading-7 text-navy/90 sm:px-5 sm:text-base">{item.a}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
