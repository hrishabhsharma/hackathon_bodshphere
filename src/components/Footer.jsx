
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white py-6 border-t">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold text-gray-800">BODSPHERE</h3>
                        <p className="text-sm text-gray-500 mt-1">
                            Download the Bodsphere App to take classes offline and practice
                            anytime, anywhere.
                        </p>
                        <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start mt-4">
                            <a
                                href="#"
                                className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center shadow hover:bg-gray-800"
                            >
                                <img
                                    src="../../public/app.png"
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
                                    src="../../public/play.png"
                                    alt="Play Store"
                                    className="mr-2 w-[20px] h-[20px]"
                                />
                                Get on Play Store
                            </a>
                        </div>
                    </div>
                    <div className="text-center mb-4 md:mb-0">
                        <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
                            FAQ
                        </a>
                        <span className="mx-2 text-gray-400">|</span>
                        <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-800"
                        >
                            Contact Us
                        </a>
                    </div>
                    <div className="text-center md:text-right">
                        <p className="text-sm text-gray-600">Follow Bodsphere</p>
                        <div className="flex justify-center md:justify-end mt-2 space-x-4">
                            <a
                                href="#"
                                className="text-gray-600 hover:text-gray-800 text-xl"
                                aria-label="Facebook"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-gray-800 text-xl"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-gray-800 text-xl"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-gray-800 text-xl"
                                aria-label="YouTube"
                            >
                                <FaYoutube />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t mt-4 pt-4 text-center">
                    <p className="text-xs text-gray-500">
                        © 2024 Bodsphere. All Rights Reserved. |{" "}
                        <a href="#" className="hover:underline">
                            Terms
                        </a>{" "}
                        |{" "}
                        <a href="#" className="hover:underline">
                            Privacy
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
