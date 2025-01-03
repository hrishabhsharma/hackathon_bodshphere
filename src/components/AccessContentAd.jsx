import Recommended from "../assets/accessContentAd.jpg";

const AccessContentAd = () => {
    return (
        <div className="relative w-full h-64 lg:h-72 bg-cover bg-center rounded-lg shadow-lg mb-4" style={{ backgroundImage: `url(${Recommended})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-start p-6 lg:p-12 text-white">
                <p className="text-sm lowercase font-medium mb-2">Recommended</p>
                <h2 className="text-xl lg:text-2xl font-bold">
                    Get access to the entire content and transform your life.
                </h2>
                <a
                    href="#"
                    className="bg-white text-gray-800 px-4 py-2 rounded-lg flex items-center shadow hover:bg-gray-200 transition"
                >
                    <span>Start Your Free Trial</span>
                </a>
            </div>
        </div>
    );
};

export default AccessContentAd;
