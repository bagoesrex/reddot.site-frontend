export default function WaveSvg() {
    return (
        <div className="w-full absolute bottom-0 left-0 z-0 pointer-events-none">
            <svg
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
                className="w-full h-[50px] md:h-[80px]"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0.00,49.98 C150.00,150.00 349.49,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                    className="fill-white/30"
                />
            </svg>
        </div>
    );
}
