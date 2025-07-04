import Image from "next/image";
import Icon from "@/public/ai-icon.webp";
import Kucink from "@/public/kucink.jpg";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section id="hero" className="flex flex-col md:flex-row min-h-svh bg-gradient-to-tr from-rose-400 to-white justify-center items-center gap-2 pb-16 pt-[120px]">
        <div className="max-w-xl text-center md:text-left px-5">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-md leading-tight">
            Awali Perjalanan AI-mu di <span className="text-red-600">Reddot</span>
          </h1>
          <p className="text-md md:text-xl mt-4 text-gray-700">
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
