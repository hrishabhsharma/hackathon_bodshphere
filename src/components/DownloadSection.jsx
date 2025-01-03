import DownloadAppSectionImage1 from "../assets/play.png";
import DownloadAppSectionImage2 from "../assets/play.png";
import DownloadAppSectionImage3 from "../assets/desktop1.jpg";

const DownloadAppSection = () => {
    return (
        <section className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-4">Download the app</h2>
                    <p className="text-gray-300 mb-6">
                        Get unlimited access to Yoga Teacher Trainings, Yoga Classes,
                        Meditation and Pranayama, Yogic Wisdom, and more.
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="bg-white text-gray-800 px-4 py-2 rounded-lg flex items-center shadow hover:bg-gray-200 transition"
                        >
                            <img
                                src={DownloadAppSectionImage1}
                                alt="Apple Store"
                                className="h-6 mr-2"
                            />
                            <span>Apple Store</span>
                        </a>
                        <a
                            href="#"
                            className="bg-white text-gray-800 px-4 py-2 rounded-lg flex items-center shadow hover:bg-gray-200 transition"
                        >
                            <img
                                src={DownloadAppSectionImage2}
                                alt="Google Play"
                                className="h-6 mr-2"
                            />
                            <span>Google Play</span>
                        </a>
                    </div>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                    <div className="relative">
                        <img
                            src={DownloadAppSectionImage3}
                            alt="Desktop Screen"
                            className="w-full max-w-sm md:max-w-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadAppSection;
