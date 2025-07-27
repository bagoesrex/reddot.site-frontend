import VisimisiCard from "./visimisi-card";

export default function VisimisiSection() {
    return (
        <section id="visimisi" className="flex flex-col md:flex-col min-h-[26rem] bg-gray-200 items-center pb-15 pt-10 px-5 w-full">
            <div className="max-w-4xl flex flex-col justify-center items-center">

                <h3 className="text-xl md:text-2xl font-extrabold leading-tight mb-2">
                    Our Vision and Mission
                </h3>
                <h4 className="text-xs md:text-sm text-center italic bg-gray-400 rounded-br-md rounded-tl-md py-1 px-2 mb-10 text-background">
                    Membangun komunitas teknologi inklusif untuk mendorong inovasi, edukasi, dan AI yang etis.
                </h4>

                <VisimisiCard />
            </div>
        </section>
    )
}