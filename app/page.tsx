"use client";

import { motion } from "framer-motion";
import { HomeCard } from "@/components/home/about-card";
import { Button } from "@/components/ui/button";
import WhyCard from "@/components/home/why-card";
import CategoryCard from "@/components/home/category-card";
import Link from "next/link";
import { dummyNews } from "@/data/dummyNews";
import { NewsCard } from "@/components/news/news-card";
import HeroAnimation from "@/components/home/hero-animation";

export default function Home() {
  return (
    <main className="flex flex-col text-gray-950">
      <section id="hero" className="flex flex-col md:flex-row min-h-svh justify-center bg-rose-200 items-center gap-2 pb-16 pt-[120px]">
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
          <HeroAnimation />
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

      <section id="about" className="flex flex-col md:flex-col min-h-[26rem] bg-gray-200 items-center pb-15 pt-10">
        <h1 className="text-2xl md:text-4xl font-extrabold drop-shadow-md leading-tight mb-7">
          Tentang
        </h1>
        <div className="flex flex-row gap-10 max-w-4xl md:text-left px-5 bg-gray-200 items-center">
          <div className="flex-1/2 p-4 bg-red-300 rounded-3xl h-fit">
            <HomeCard />
          </div>
          <div className="flex-1/2 space-y-5">
            <h2 className="text-2xl font-bold text-gray-900">Apa Itu Reddot ?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Reddot</strong> merupakan platform edukasi yang dibuat oleh <strong>Reddot Community</strong> untuk mengedukasi masyarakat tentang kecerdasan buatan (<em>AI</em>) secara <strong>gratis</strong>, mudah dipahami, dan terbuka untuk semua kalangan.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-10 max-w-4xl md:text-left px-5 bg-gray-200 items-center pt-10">
          <div className="flex-1/2 space-y-5">
            <h2 className="text-2xl font-bold text-gray-900">Apa Itu Reddot Community ?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Reddot Community</strong> adalah komunitas terbuka yang berfokus pada pengembangan, kolaborasi, dan penyebaran edukasi seputar <em>Artificial Intelligence (AI)</em>. Komunitas ini mendorong pembelajaran bersama, berbagi sumber daya, dan membangun masa depan AI yang inklusif di Indonesia.
            </p>
          </div>
          <div className="flex-1/2 p-4 bg-red-300 rounded-3xl h-fit">
            <HomeCard />
          </div>
        </div>
        <Button asChild className="bg-red-600 hover:bg-transparent border-2 border-red-600 hover:text-red-600 mt-10" size={"lg"}>
          <a href="#">Learn more about us</a>
        </Button>
      </section>

      <section id="why" className="flex flex-col md:flex-col min-h-[26rem] bg-gray-400 items-center pb-15 pt-10">
        <h1 className="text-2xl md:text-4xl font-extrabold drop-shadow-md leading-tight mb-2">
          Kenapa Belajar AI di Reddot
        </h1>
        <h2 className="bg-gray-300 rounded-xl py-1 px-2 mb-10">
          Platform AI yang Ramah untuk Semua
        </h2>
        <div className="flex max-w-4x">
          <WhyCard />
        </div>
      </section>

      <section id="category" className="flex flex-col md:flex-col min-h-[26rem] bg-gray-200 items-center pb-15 pt-10">
        <h1 className="text-2xl md:text-4xl font-extrabold drop-shadow-md leading-tight mb-2">
          Kategori Pembelajaran
        </h1>
        <h2 className="bg-gray-300 rounded-xl py-1 px-2 mb-10">
          Jelajahi Berbagai Materi Pembelajaran
        </h2>
        <div className="flex max-w-4xl">
          <CategoryCard />
        </div>
        <Link href="/" className="pt-10">
          <Button className="bg-red-600 hover:bg-transparent border-2 border-red-600 hover:text-red-600" size={"lg"}>
            Mulai Belajar
          </Button>
        </Link>
      </section>

      <section id="news" className="flex flex-col md:flex-col min-h-[26rem] bg-gray-400 items-center pb-15 pt-10">
        <h1 className="text-2xl md:text-4xl font-extrabold drop-shadow-md leading-tight mb-2">
          Berita AI Terbaru Terbaru
        </h1>
        <h2 className="bg-gray-300 rounded-xl py-1 px-2 mb-10">
          Baca Berita Tentang AI Terbaru
        </h2>
        <div className="flex max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyNews.map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>
        </div>
        <Link href="/news" className="pt-10">
          <Button className="bg-red-600 hover:bg-transparent border-2 border-red-600 hover:text-red-600" size={"lg"}>
            Lihat Semua Artikel
          </Button>
        </Link>
      </section>
    </main>
  );
}
