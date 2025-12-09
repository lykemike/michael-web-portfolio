"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { personal_data } from "@/data/db";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 mx-auto max-w-full bg-white/70 backdrop-blur border-b border-l border-r  border-black/10">
      <div className="max-w-5xl px-4 py-4 mx-auto flex items-center justify-between gap-6 ">
        {/* Left: logo/name */}
        <Link href="/" className="flex items-center gap-2 font-medium">
          <span className="text-xl">✦</span>
          <span>Mike</span>
        </Link>

        {/* Right: nav */}
        <nav className="text-sm lg:text-base flex items-center gap-2 md:gap-6 tracking-wide font-sans">
          {personal_data.navbar.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`transition-colors ${
                  active
                    ? "text-black font-semibold"
                    : "text-neutral-500 hover:text-neutral-800"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
