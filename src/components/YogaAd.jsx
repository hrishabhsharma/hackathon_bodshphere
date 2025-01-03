import YogaImage from "../assets/yoga.png";
import AppImage from "../assets/app.png";
import PlayImage from "../assets/play.png";

const YogaAd = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center bg-white p-8 lg:p-16">
            <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
                <img
                    src={YogaImage}
                    alt="Yoga Pose"
                    className="rounded-lg shadow-lg"
                />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">
                    Yoga Like Never Before
                </h1>
                <p className="text-gray-600 mb-6">
                    Becoming a Yoga Teacher has never been so easy. You can even download
                    your favorite classes so they’re always available when you want them.
                </p>
                <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
                    <a
                        href="#"
                        className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center shadow hover:bg-gray-800"
                    >
                        <img
                            src={AppImage}
                            alt="Apple Store"
                            className="mr-2 w-[20px] h-[20px]"
                        />
                        Get on App Store
                    </a>
                    <a
                        href="#"
                        className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center shadow hover:bg-gray-800"
                    >
                        <img
                            src={PlayImage}
                            alt="Play Store"
                            className="mr-2 w-[20px] h-[20px]"
                        />
                        Get on Play Store
                    </a>
                </div>
            </div>
        </div>
    );
};

export default YogaAd;
