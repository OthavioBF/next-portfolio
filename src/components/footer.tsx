import React from "react";

export default function Footer() {
  return (
    <footer className="w-full px-4 mb-20 text-center text-gray-500 sm:fixed sm:bottom-10 sm:mb-0">
      <small className="block mb-2 text-xs">
        &copy; 2030 Othavio. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
