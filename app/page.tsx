"use client";

import Image from "next/image";
import Icon from "@/public/ai-icon.webp";
import { motion } from "framer-motion";
import { HomeCard } from "@/components/home/about-card";
import { Button } from "@/components/ui/button";
import WhyCard from "@/components/home/why-card";

export default function Home() {
  return (
    <main className="flex flex-col text-gray-950">
      <section id="hero" className="flex flex-col md:flex-row min-h-svh bg-gradient-to-tr from-rose-400 to-red-400 justify-center items-center gap-2 pb-16 pt-[120px]">
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
            className="text-md md:text-xl mt-4"
          >
            Platform edukasi untuk memahami kecerdasan buatan secara menyeluruh dan mudah diakses semua orang.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-6 hidden md:flex justify-center md:justify-start gap-4"
          >
            <Button asChild className="bg-red-600 hover:bg-transparent border-2 border-red-600 hover:text-red-600" size={"lg"}>
              <a href="#">Get Started</a>
            </Button>
          </motion.div>
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
          <div className="mt-4 flex justify-center items-center md:hidden">
            <Button
              asChild
              className="bg-red-600 hover:bg-transparent border-2 border-red-600 hover:text-red-600"
              size="lg"
            >
              <a href="#">Get Started</a>
            </Button>
          </div>
        </motion.div>
      </section>

      <section id="about" className="flex flex-col md:flex-col min-h-[26rem] bg-gray-200 items-center">
        <h1 className="text-2xl md:text-4xl font-extrabold drop-shadow-md leading-tight py-10">
          Tentang
        </h1>
        <div className="flex flex-row gap-10 max-w-4xl md:text-left px-5 bg-gray-200 items-center">
          <div className="flex-1/2 p-4 bg-red-300 rounded-3xl h-fit">
            <HomeCard />
          </div>
          <div className="flex-1/2">
            <h1 className="text-center">Test</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore eligendi ullam aliquid tenetur qui veritatis inventore culpa quia. Non temporibus natus autem corrupti amet eligendi, molestiae sed a ducimus harum!
              Veniam consectetur ullam incidunt dignissimos, recusandae quidem nihil illo repudiandae repellendus qui neque cupiditate labore in ducimus impedit aliquam sit, eum iure cumque? Quibusdam sit unde voluptatum molestias, eum sed.</p>
          </div>
        </div>
      </section>

      <section id="why" className="flex flex-col md:flex-col min-h-[26rem] bg-gray-200 items-center">
        <h1 className="text-2xl md:text-4xl font-extrabold drop-shadow-md leading-tight mt-10 mb-2">
          Kenapa Belajar AI di Reddot
        </h1>
        <h2 className="bg-gray-300 rounded-xl py-1 px-2 mb-10">
          Platform AI yang Ramah untuk Semua
        </h2>
        <div className="flex max-w-4x">
          <WhyCard />
        </div>
      </section>
    </main>
  );
}
