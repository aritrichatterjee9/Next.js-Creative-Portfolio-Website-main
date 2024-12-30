"use client";

import React from "react";
import { Toaster } from "sonner";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {
  return (
    <>
      <Toaster richColors={true} />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <motion.h1 variants={item} className="text-xl font-bold">
          Contact Me
        </motion.h1>
        <motion.p variants={item} className="text-lg">
          Click below to send an email via Outlook Web:
        </motion.p>
        <motion.a
          variants={item}
          href="https://outlook.live.com/mail/0/deeplink/compose?to=ari.c89@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-lg shadow-lg shadow-indigo-300 hover:shadow-2xl hover:scale-105 transform transition-all duration-300 active:scale-95"
        >
          ari.c89@outlook.com
        </motion.a>
      </motion.div>
    </>
  );
}
