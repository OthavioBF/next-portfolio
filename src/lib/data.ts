import React, { createElement } from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import {
  SiExpo,
  SiTailwindcss,
  SiStyledcomponents,
  SiPrisma,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RxStitchesLogo } from "react-icons/rx";
import {
  TbBrandReactNative,
  TbBrandNextjs,
  TbBrandFramerMotion,
} from "react-icons/tb";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../../public/corpcomment.png";
import rmtdevImg from "../../public/rmtdev.png";
import wordanalyticsImg from "../../public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "About",
    hash: "/About",
  },
  {
    name: "Projects",
    hash: "/Projects",
  },
  {
    name: "Skills",
    hash: "/Skills",
  },
  {
    name: "Experience",
    hash: "/Experience",
  },
  {
    name: "Contact",
    hash: "/Contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Industriall - Web/Mobile Developer",
    location: "Vitória, ES",
    description:
      "I worked with Angular and React to build Web and Mobile solutions for industries",
    icon: createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Pincel Atômico - Web Developer",
    location: "Serra, ES",
    description:
      "Migrating an entire educational system from PHP to React with Next Js, on this platform we have the student side and teacher side on the same base code, and in a separate code base we have the administration system that rules everything.",
    icon: createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Pincel Atomico",
    description:
      "Migrating an entire educational system from PHP to React with Next Js, on this platform we have the student side and teacher side on the same base code",
    tags: ["React", "Next.js", "PHP", "Tailwind", "Stitches"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  {
    name: "HTML",
    icon: createElement(FaHtml5),
  },
  {
    name: "CSS",
    icon: createElement(FaCss3Alt),
  },
  {
    name: "JavaScript",
    icon: createElement(RiJavascriptFill),
  },
  {
    name: "TypeScript",
    icon: createElement(BiLogoTypescript),
  },
  {
    name: "React",
    icon: createElement(FaReact),
  },
  {
    name: "React Native",
    icon: createElement(TbBrandReactNative),
  },
  {
    name: "Next Js",
    icon: createElement(TbBrandNextjs),
  },
  {
    name: "Expo",
    icon: createElement(SiExpo),
  },
  {
    name: "Git",
    icon: createElement(FaGitAlt),
  },
  {
    name: "Tailwind",
    icon: createElement(SiTailwindcss),
  },
  {
    name: "Styled Components",
    icon: createElement(SiStyledcomponents),
  },
  {
    name: "Stitches Css",
    icon: createElement(RxStitchesLogo),
  },
  {
    name: "Prisma",
    icon: createElement(SiPrisma),
  },
  {
    name: "Framer Motion",
    icon: createElement(TbBrandFramerMotion),
  },
] as const;
