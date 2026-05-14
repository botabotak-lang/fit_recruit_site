"use client";

import { motion } from "framer-motion";

const STEPS = [
  "Indeed などから応募（書類）",
  "書類選考",
  "対面面接（1〜2回）",
  "内定・入社手続き",
];

export default function FlowSection() {
  return (
    <section id="flow" className="section-fit">
      <div className="container-fit">
        <h2>
          <span className="section-title-en">FLOW</span>
          <span className="section-title-jp">選考の流れ（例）</span>
        </h2>
        <ol className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-4">
          {STEPS.map((step, index) => (
            <motion.li
              key={step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              className="rounded-xl border border-navy/10 bg-slate-50 p-4 text-sm font-bold text-navy sm:text-base"
            >
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-orange text-white">
                {index + 1}
              </span>
              <p>{step}</p>
            </motion.li>
          ))}
        </ol>
        <p className="mt-5 text-sm leading-7 text-navy/90 sm:text-base">
          面接は対面のみです。日程はご相談のうえ調整します。
        </p>
      </div>
    </section>
  );
}
