import WaveSvg from "../shared/wave-svg";

export default function TitleSection() {
    return (
        <section
            id="title"
            className="flex flex-col rounded-md bg-primary/80 backdrop-blur-md items-center max-w-4xl w-full mt-16 mx-5 relative overflow-hidden"
        >
            <div className="flex flex-col justify-center items-center w-full text-background gap-3 pt-4 pb-7 z-10">
                <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
                    About
                </h2>
                <h3 className="text-xl md:text-2xl font-bold leading-tight italic">
                    Reddot Community
                </h3>
            </div>

            <WaveSvg />
        </section>
    );
}
