"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HERO_IMAGES = [
  "/images/evp-01-skill.webp",
  "/images/recruit-fv.webp",
  "/images/recruit-fv-ship-bridge-training.png",
  "/images/evp-03-local.webp",
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden" aria-label="採用情報 見出し">
      <div className="absolute inset-0" aria-hidden="true">
        {HERO_IMAGES.map((src, index) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: activeIndex === index ? 1 : 0 }}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-navy/45" />
      </div>

      <div className="container-fit relative z-10 flex min-h-[calc(100svh-4rem)] items-center py-16">
        <div className="max-w-4xl">
          <p className="font-display text-lg tracking-[0.2em] text-orange sm:text-xl">RECRUIT</p>
          <p className="mt-3 text-base font-bold text-white sm:text-lg">
            経験者も未経験も、ここから育てる。地元で一流の技術者へ。
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-h1 mt-5"
          >
            船舶業界の未来のために、
            <br className="sm:hidden" />
            あなたの力が必要だ
          </motion.h1>
          <p className="mt-6 text-sm font-bold text-white/95 sm:text-base">
            採用コンセプト: 「世界で必要とされる技術者として、地元で生きていく。」
          </p>
          <p className="mt-2 text-sm font-bold text-white/95 sm:text-base">Mission: 「船の安全を、技術で守る。」</p>
          <p className="mt-2 text-sm font-bold text-white/95 sm:text-base">
            Values: やり切る／誠実に、まっすぐに／現場の和を大切にする
          </p>
        </div>
      </div>
    </section>
  );
}
