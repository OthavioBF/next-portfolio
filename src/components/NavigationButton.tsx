"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { SectionName } from "@/lib/types";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

type NavigationButton = {
  href: SectionName;
  text: string;
};

export default function NavigationButton({ href, text }: NavigationButton) {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <Link
      className="flex items-center gap-2 py-3 mx-auto mt-10 transition bg-white rounded-full outline-none cursor-pointer w-fit group px-7 focus:scale-110 hover:scale-110 active:scale-105 borderBlack dark:bg-white/10"
      href={`/${href.toLocaleLowerCase()}`}
      onClick={() => {
        setActiveSection(href);
        setTimeOfLastClick(Date.now());
      }}
    >
      {text}
      <BsArrowRight className="transition opacity-70 group-hover:translate-x-1" />
    </Link>
  );
}
