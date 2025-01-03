import AccreditationSectionImage from "../assets/mobile.jpg";

const AccreditationSection = () => {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-0">
                <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        Get Internationally Accredited by Bodsphere, <br /> from the comfort of your home
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Join the Bodsphere Community and take the first step towards joining the
                        World’s Biggest Community of Yoga Schools and Teachers that represent high quality,
                        safe, affordable, accessible and equitable Yoga.
                    </p>
                    <button className="px-6 py-3 bg-white border border-gray-900 text-gray-900 rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 transition">
                        Get Accredited
                    </button>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                    <img
                        src={AccreditationSectionImage}
                        alt="Mobile Mockup"
                        className="w-[300px] lg:w-[400px] drop-shadow-xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default AccreditationSection;
