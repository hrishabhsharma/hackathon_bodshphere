const Banner = () => {
    return (
        <div className="relative h-screen bg-gray-900">
            <img
                src="../../public/yogaBanner.jpg"
                alt="Yoga World"
                className="w-full h-full object-cover opacity-70"
            />

            <div className="absolute inset-0 flex flex-col items-start justify-center px-8 sm:px-16 lg:px-24 text-white">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-left">
                    Welcome to the <br /> Yogic World.
                </h1>
                <p className="text-lg sm:text-xl mb-6 text-left">
                    Yoga Teacher Trainings, Classes, <br />
                    Meditation, Pranayama, Music, Philosophy & More. <br />
                    Everything under $10.
                </p>
            </div>
        </div>
    )
}

export default Banner;
