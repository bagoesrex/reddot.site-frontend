"use client"

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import HeroAnimation from "./hero-animation";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
    return (
        <section id="hero" className="flex flex-col min-h-svh md:flex-row justify-center items-center gap-2 bg-background pb-15 pt-[100px] md:pt-[120px]">
            <div className="max-w-xl text-center md:text-left px-5">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="heading-main"
                >
                    Awali Perjalanan AI-mu di <span className="text-primary/80">Reddot</span>
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
                    className="mt-8 hidden md:flex justify-center md:justify-start gap-4"
                >
                    <Button
                        onClick={() => {
                            const section = document.getElementById("about");
                            if (section) {
                                section.scrollIntoView();
                            }
                        }}
                        className="group bg-primary/80 hover:bg-transparent border-2 border-primary/80 hover:text-primary/80"
                        size={"lg"}
                    >
                        Get Started
                        <span className="group-hover:ml-3 transition-all"><ChevronDown /></span>
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
                        onClick={() => {
                            const section = document.getElementById("about");
                            if (section) {
                                section.scrollIntoView();
                            }
                        }}
                        className="group bg-primary/80 hover:bg-transparent border-2 border-primary/80 hover:text-primary/80"
                        size={"lg"}
                    >
                        Get Started
                        <span className="group-hover:ml-3 transition-all"><ChevronDown /></span>
                    </Button>
                </div>
            </motion.div>
        </section>
    )
}