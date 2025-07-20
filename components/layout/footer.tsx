export default function Footer() {
    return (
        <footer
            aria-label="Site Footer"
            className="flex flex-col items-center bg-primary/80 text-white py-12 px-6"
        >
            <div className="w-full max-w-4xl flex flex-wrap gap-8">
                <div className="w-full md:w-6/12">
                    <h1 className="text-xl font-bold mb-2">Tentang Kami</h1>
                    <p className="text-sm leading-relaxed">
                        RedDot Community adalah komunitas edukasi AI yang lahir dari
                        kegelisahan akan potensi penyalahgunaan AI di masa depan. Kami
                        hadir untuk meningkatkan literasi digital dan etika teknologi.
                    </p>
                </div>

                <nav className="w-full sm:w-4/12 md:w-2/12">
                    <h2 className="font-semibold mb-2">Layanan</h2>
                    <ul className="text-sm space-y-1">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">News</a></li>
                        <li><a href="#" className="hover:underline">Article</a></li>
                        <li><a href="#" className="hover:underline">E-Learning</a></li>
                    </ul>
                </nav>

                <nav className="w-full sm:w-4/12 md:w-2/12">
                    <h2 className="font-semibold mb-2">Ikuti Kami</h2>
                    <ul className="text-sm space-y-1">
                        <li><a href="#" className="hover:underline">Instagram</a></li>
                        <li><a href="#" className="hover:underline">LinkedIn</a></li>
                        <li><a href="#" className="hover:underline">YouTube</a></li>
                    </ul>
                </nav>
            </div>

            <div className="w-full text-center text-xs pt-15">
                &copy; {new Date().getFullYear()} RedDot Community. All rights reserved.
            </div>
        </footer>
    )
}
