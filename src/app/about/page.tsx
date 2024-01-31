"use client";

import React from "react";
import SectionHeading from "../../components/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import NavigationButton from "@/components/NavigationButton";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 mx-auto px-4 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Since i started my degree in{" "}
        <span className="font-medium">UCL Manguinhos</span>, I decided to pursue
        my passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">
          front-end web and mobile development
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, React Native, and Expo
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and working out. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">soft skills to improve my carrer</span>.
        I'm also learning how to play the guitar.
      </p>

      <NavigationButton text="View projects" href="Projects" />
    </motion.section>
  );
}
