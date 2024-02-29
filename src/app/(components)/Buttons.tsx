import Link from "next/link";
import React from "react";

function Buttons() {
  return (
    <div className="w-full flex  items-center justify-center gap-4 text-xs text-slate-400 md:text-sm md:gap-8">
      <Link className=" flex justify-center" href="/">
        <button>🌱 Everyone 🌱</button>
      </Link>

      <Link className=" flex justify-center" href="/girls">
        <button>🎀 Girls 🎀</button>
      </Link>

      <Link className=" flex justify-center" href="/boys">
        <button>🍆 Boys 🍆</button>
      </Link>
    </div>
  );
}

export default Buttons;
