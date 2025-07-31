import WaveSvg from "../shared/wave-svg";

export default function TitleSection() {
    return (
        <section
            id="title"
            className="flex flex-col items-center w-full mt-21 px-5"
        >
            <div className="flex flex-col max-w-4xl w-full justify-center rounded-md bg-primary/80 backdrop-blur-md items-center text-white gap-3 pt-4 pb-7 z-10 relative">
                <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
                    About
                </h2>
                <h3 className="text-xl md:text-2xl font-bold leading-tight italic">
                    Reddot Community
                </h3>
                <WaveSvg />
            </div>
        </section>
    );
}
