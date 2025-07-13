import WhyCard from "./why-card";

export default function WhySection() {
    return (
        <section id="why" className="flex flex-col md:flex-col min-h-[26rem] bg-rose-200 items-center pb-15 pt-10 px-5">
            <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-2">
                Kenapa Belajar AI di Reddot
            </h2>
            <h3 className="bg-red-400 rounded-xl py-1 px-2 mb-10 text-white">
                Platform AI yang Ramah untuk Semua
            </h3>
            <div className="flex max-w-4x">
                <WhyCard />
            </div>
        </section>
    )
}