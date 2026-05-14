"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ITEMS = [
  {
    image: "/images/evp-01-skill.webp",
    alt: "船内で航海計器を操作する技術者",
    kicker: "技術が身につく職場",
    headline: "知識ゼロからでも、現場で本物の技術者になれる。",
    body: "電気・電子・通信が絡む複合技術です。机上だけでなく、船と港で手を動かしながら覚えます。必要な資格の取得費用は会社が全額負担し、先輩と一緒に現場の手順を身につけていきます。",
  },
  {
    image: "/images/evp-02-career.webp",
    alt: "港で顧客と話し合うFIT技術者",
    kicker: "キャリアの見通し",
    headline: "入社からのルートが見える。意欲次第で、裁量はどんどん広がる。",
    body: "少数精鋭だから、頑張りが直接ポジションに反映される環境があります。「どこまで行けるかわからない」ではなく、1年・3年・5年の到達イメージを持って働けます。",
  },
  {
    image: "/images/evp-03-local.webp",
    alt: "焼津漁港の大型漁船が並ぶ全景",
    kicker: "地元で生きていく",
    headline: "転勤なし。焼津で、ずっと暮らし続けながらキャリアを積める。",
    body: "港を行き来する船の安全を守る仕事は、この街でしかできない仕事です。地元に根を張り、長く誇れるキャリアを積みたい人に合う職場です。",
  },
  {
    image: "/images/evp-04-technical-work.png",
    alt: "船内で機械を調整するFIT技術者",
    kicker: "手に職・市場価値",
    headline: "船舶専門技術者は、全国でも数が少ない。だから、価値が高い。",
    body: "航行安全に直結する設備保守は、短期的な流行で需要が消える型の仕事ではありません。全国でも専門者が不足しており、現場を重ねた人ほど頼られる構造です。積み上げた経験と資格が、そのまま信頼と評価につながりやすい領域です。",
  },
];

export default function EvpSection() {
  return (
    <section id="evp" className="section-fit bg-slate-50">
      <div className="container-fit">
        <h2>
          <span className="section-title-en">WHY FIT</span>
          <span className="section-title-jp">働く魅力</span>
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {ITEMS.map((item, index) => (
            <motion.article
              key={item.kicker}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl bg-white shadow-card"
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={1200}
                height={700}
                className="h-52 w-full object-cover"
              />
              <div className="p-5 sm:p-6">
                <p className="text-sm font-bold text-orange">{item.kicker}</p>
                <h3 className="mt-2 text-xl font-black leading-snug text-navy">{item.headline}</h3>
                <p className="mt-3 text-sm leading-7 text-navy/90 sm:text-base">{item.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
