"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyApplyCTA() {
  const [showDesktop, setShowDesktop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowDesktop(window.scrollY > window.innerHeight * 0.7);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showDesktop ? (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
          >
            <Link
              href="#apply"
              className="inline-flex rounded-full bg-orange px-6 py-4 text-lg font-black text-white shadow-card transition hover:brightness-110"
            >
              応募する
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-white/95 p-3 backdrop-blur lg:hidden">
        <Link
          href="#apply"
          className="block rounded-full bg-orange px-5 py-3 text-center text-base font-black text-white"
        >
          応募する
        </Link>
      </div>
    </>
  );
}
