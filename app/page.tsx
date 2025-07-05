"use client";

import Image from "next/image";
import Icon from "@/public/ai-icon.webp";
import Kucink from "@/public/kucink.jpg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section id="hero" className="flex flex-col md:flex-row min-h-svh bg-gradient-to-tr from-rose-400 to-white justify-center items-center gap-2 pb-16 pt-[120px]">
        <div className="max-w-xl text-center md:text-left px-5">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold drop-shadow-md leading-tight"
          >
            Awali Perjalanan AI-mu di <span className="text-red-600">Reddot</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-md md:text-xl mt-4 text-gray-700"
          >
            Platform edukasi untuk memahami kecerdasan buatan secara menyeluruh dan mudah diakses semua orang.
          </motion.p>
        </div>

        <motion.div
          className="w-[300px] aspect-[1/1]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <Image
            src={Icon}
            alt="AI Icon"
            width={300}
            height={300}
            className="object-contain"
            priority
          />
        </motion.div>
      </section>

      <section id="about" className="flex flex-col md:flex-col min-h-svh bg-gray-200 items-center">
        <h1 className="text-2xl md:text-4xl font-extrabold drop-shadow-md leading-tight py-10">
          Tentang
        </h1>
        <div className="flex flex-col w-full pr-5 md:flex-row gap-2">
          <div className="flex justify-end w-full md:w-1/2 bg-gradient-to-tr from-white to-rose-400 rounded-br-4xl p-5">
            <div className="w-[460px] h-[280px] bg-gray-500 rounded-br-4xl overflow-hidden">
              <Image
                src={Kucink}
                alt="AI Icon"
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
          <div className="flex justify-start w-full md:w-1/2 rounded-br-4xl p-5">
            <div className="w-[460px] h-[280px] rounded-br-4xl overflow-hidden">
              <p className="text-lg md:text-xl mt-4 text-gray-700">
                Keonk Keonk Keonk Keonk...
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
