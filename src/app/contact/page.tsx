"use client";

import React from "react";
import SectionHeading from "../../components/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "../../components/submit-btn";
import toast from "react-hot-toast";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 mx-auto px-4 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="flex flex-col mt-10 dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="px-4 transition-all rounded-lg h-14 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="p-4 my-3 transition-all rounded-lg h-52 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>

      <Link
        href="/"
        className="flex items-center gap-2 py-3 mx-auto mt-10 text-white transition bg-gray-900 rounded-full outline-none w-fit group px-7 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
        onClick={() => {
          setActiveSection("Home");
          setTimeOfLastClick(Date.now());
        }}
      >
        <BsArrowLeft className="transition opacity-70 group-hover:-translate-x-1" />
        Back to Home{" "}
      </Link>
    </motion.section>
  );
}
