"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const STEPS = [
  {
    phase: "入社〜2ヶ月",
    title: "道具と現場に慣れる",
    image: "/images/onb-step-01-tools.jpg",
    alt: "先輩と一緒に工具や機器の基本を学ぶ様子",
    points: [
      "初日から先輩と現場へ。まず「見る」ことが仕事",
      "事務所で機器の分解・組立・半田付けを実践",
      "工具の名前と使い方、機器の基本構造を体に入れる",
    ],
  },
  {
    phase: "2〜4ヶ月",
    title: "現場の「型」をつかむ",
    image: "/images/onb-step-02-ship-training.png",
    alt: "船内で先輩から機器作業の指導を受ける様子",
    points: [
      "顧客先での立ち回り・段取りを体で覚える",
      "先輩の動きから「何のためにするか」を理解する",
      "触れた機器のメーカー公式オンライン研修を開始（費用は全額会社負担）",
    ],
  },
  {
    phase: "4〜6ヶ月",
    title: "先輩確認のもとで「手を動かす」",
    image: "/images/onb-step-03-japanese-hands.png",
    alt: "船内で先輩の確認を受けながら機器点検を行う様子",
    points: [
      "接続確認・清掃・部品交換など定型作業を担当",
      "「次に何をするか」が予測できるようになる",
      "メーカー研修で現場で触れた機器の「なぜ」を理解する",
    ],
  },
  {
    phase: "6ヶ月〜1年",
    title: "「任せてもらえる」が増える",
    image: "/images/onb-step-04-walk.webp",
    alt: "工具を持って現場へ向かう技術スタッフの様子",
    points: [
      "先輩がそばにいなくても回せる作業が出始める",
      "納品など単独で完結できる業務が生まれる",
      "修理の方針を先輩と相談しながら考えられるようになる",
    ],
  },
  {
    phase: "1年頃〜",
    title: "一人前の技術者へ",
    image: "/images/onb-step-05-first-year-tech.png",
    alt: "航海計器を確認する入社1年目の若手技術者の様子",
    points: ["主要な点検・修理を単独で担当する場面が増える", "約3年で主要業務を一人で回せる水準が目安"],
  },
];

export default function OnboardingSection() {
  return (
    <section id="onboarding" className="section-fit">
      <div className="container-fit">
        <h2>
          <span className="section-title-en">ONBOARDING</span>
          <span className="section-title-jp">入社後の流れ</span>
        </h2>
        <p className="mt-5 text-sm leading-7 text-navy/90 sm:text-base">
          未経験から入社した場合の
          <strong>目安</strong>
          です。到達時期や研修の進め方には
          <strong>個人差</strong>
          があります。
        </p>

        <div className="relative mt-8 space-y-6 before:absolute before:bottom-0 before:left-3.5 before:top-0 before:w-px before:bg-navy/20 sm:before:left-4">
          {STEPS.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative rounded-2xl border border-navy/10 bg-white p-5 shadow-sm sm:p-6"
            >
              <span className="absolute left-0 top-8 h-2.5 w-2.5 rounded-full bg-orange sm:h-3 sm:w-3" />
              <p className="pl-6 text-sm font-bold text-orange">{step.phase}</p>
              <h3 className="mt-1 pl-6 text-xl font-black text-navy">{step.title}</h3>
              <Image
                src={step.image}
                alt={step.alt}
                width={1200}
                height={700}
                className="mt-4 h-52 w-full rounded-xl object-cover sm:h-64"
              />
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-navy/90 sm:text-base">
                {step.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
