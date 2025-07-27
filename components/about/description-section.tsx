import Image from "next/image";

export default function DescriptionSection() {
    return (
        <section id="description" className="flex flex-col md:flex-col min-h-[26rem] items-center pb-15 pt-15 px-5 max-w-4xl w-full">
            <div className="flex flex-row w-full">
                <div className="flex-1/2 justify-center items-center w-full">
                    <Image src="/illustrations/tugu.webp" alt="tugu" width={300} height={300} />
                </div>
                <div className="flex-1/2 justify-center items-center w-full">
                    <p className="text-xl leading-9">Reddot Community berasal dari <span className="text-[#D10000] font-semibold">Semarang</span>, dan dibentuk sebagai wadah kolaboratif bagi
                        siapa saja yang tertarik dengan dunia Artificial Intelligence (AI). Kami percaya bahwa masa depan AI yang inklusif dan
                        bermanfaat dimulai dari komunitas yang aktif belajar, berbagi, dan tumbuh bersama.
                    </p>
                </div>
            </div>
        </section>
    )
}