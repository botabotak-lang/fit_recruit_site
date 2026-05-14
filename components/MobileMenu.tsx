"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const NAV_ITEMS = [
  { href: "https://fit-ec.jp", label: "ホーム" },
  { href: "https://fit-ec.jp/service", label: "業務内容" },
  { href: "https://fit-ec.jp/company", label: "会社概要" },
  { href: "#jobs", label: "募集職種" },
  { href: "#apply", label: "応募する" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.nav
          aria-label="モバイルメニュー"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-x-4 top-20 z-50 rounded-2xl border border-navy/15 bg-white p-4 shadow-card md:hidden"
        >
          <ul className="space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block rounded-lg px-3 py-2 font-bold text-navy hover:bg-navy/5"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      ) : null}
    </AnimatePresence>
  );
}
