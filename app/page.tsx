import Image from "next/image";
import Icon from "@/public/ai-icon.webp";

export default function Home() {
  return (
    <main className="min-h-svh flex flex-col">
      <section className="flex flex-col md:flex-row justify-center items-center gap-2 px-6 py-16">
        <div className="max-w-xl text-center   md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-md leading-tight">
            Awali Perjalanan AI-mu di <span className="text-red-600">Reddot</span>
          </h1>

          <p className="text-lg md:text-xl mt-4 text-gray-700">
            Platform edukasi untuk memahami kecerdasan buatan secara menyeluruh dan mudah diakses semua orang.
          </p>
        </div>

        <div className="w-[300px] aspect-[1/1]">
          <Image
            src={Icon}
            alt="AI Icon"
            width={300}
            height={300}
            className="object-contain"
            priority
          />
        </div>
      </section>
    </main>
  );
}
