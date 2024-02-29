"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function Buttons() {
  const pathname = usePathname();

  return (
    <div className="w-full flex  items-center justify-center gap-4 text-xs text-slate-400 md:text-sm md:gap-8">
      <Link className=" flex justify-center" href="/">
        <button className={` ${pathname === "/" ? "bg-purple-600/30" : ""}`}>
          🌱 Everyone 🌱
        </button>
      </Link>

      <Link className=" flex justify-center" href="/girls">
        <button
          className={` ${pathname === "/girls" ? "bg-fuchsia-500/30" : ""}`}
        >
          🎀 Girls 🎀
        </button>
      </Link>

      <Link className=" flex justify-center" href="/boys">
        <button
          className={` ${pathname === "/boys" ? "bg-indigo-600/30" : ""}`}
        >
          🍆 Boys 🍆
        </button>
      </Link>
    </div>
  );
}

export default Buttons;
