

export function HeroSection(){
    return (
        <div className="w-full h-full p-2">
            <div className="relative w-full h-64 md:h-96 lg:h-[500px] bg-cover bg-center rounded-xl bg-opacity-85 " style={{ backgroundImage:"url(/blogwallpaper.jpg)" }}>
            <div className="absolute inset-0 bg-black opacity-50 rounded-xl" ></div>
                <div className="relative z-10 flex items-center justify-center h-full">
                    <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold font-serif mb-5">Lets Blog</h1>
                    <p className="absolute mt-32 rounded-3xl z-10 md:p-2 md:mt-28 md:text-lg  text-xl p-2 sm:p-3 sm:text-xs bg-black">Get Started</p>
                </div>
        </div>
        </div>

    )
}