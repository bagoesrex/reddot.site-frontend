import Link from "next/link";
import CategoryCard from "./category-card";
import { Button } from "../ui/button";

export default function CategorySection() {
    return (
        <section id="category" className="flex flex-col md:flex-col min-h-[26rem] bg-gray-200 items-center pb-15 pt-10 px-5">
            <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-2">
                Kategori Pembelajaran
            </h2>
            <h3 className="bg-gray-400 rounded-xl py-1 px-2 mb-10 text-white">
                Jelajahi Berbagai Materi Pembelajaran
            </h3>
            <div className="flex max-w-4xl">
                <CategoryCard />
            </div>
            <Link href="https://learn.reddot.site" className="pt-15">
                <Button className="bg-red-600 hover:bg-transparent border-2 border-red-600 hover:text-red-600" size={"lg"}>
                    Mulai Belajar
                </Button>
            </Link>
        </section>
    )
}