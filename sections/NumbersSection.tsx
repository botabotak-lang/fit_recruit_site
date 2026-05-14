"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type CountUpProps = {
  to: number;
  suffix?: string;
};

function CountUp({ to, suffix }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) {
      return;
    }
    const duration = 1200;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = Math.floor(progress * to);
      setValue(current);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix ? <small>{suffix}</small> : null}
    </span>
  );
}

export default function NumbersSection() {
  return (
    <section id="numbers-fit" className="section-fit bg-slate-50">
      <div className="container-fit">
        <h2>
          <span className="section-title-en">NUMBERS</span>
          <span className="section-title-jp">数字で見るFIT</span>
        </h2>
        <p className="mt-5 text-sm leading-7 text-navy/90 sm:text-base">
          働き方や待遇を、数字でわかりやすくまとめました。応募前の目安としてご覧ください。
        </p>
        <p className="mt-3 text-sm leading-7 text-navy/90 sm:text-base">
          給与は
          <strong>経験・資格・これまでの実績</strong>
          をふまえて決定します。面接では、現在のご状況や希望も伺いながら、具体的な条件をすり合わせます。
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { value: <CountUp to={4} suffix="ヶ月分" />, label: "賞与（目安）" },
            { value: <>全額</>, label: "資格取得費用 会社負担" },
            { value: <>なし</>, label: "転勤" },
            { value: <CountUp to={2005} suffix="年" />, label: "創業 20年以上の実績" },
            { value: <CountUp to={5} suffix="h" />, label: "残業（月平均） 勤務 8:00-17:00・詳細は募集要項" },
          ].map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
              className="rounded-2xl border border-navy/10 bg-white p-5 text-center shadow-sm"
            >
              <p className="text-3xl font-black text-orange sm:text-4xl">{item.value}</p>
              <p className="mt-2 text-sm font-bold leading-6 text-navy">{item.label}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
