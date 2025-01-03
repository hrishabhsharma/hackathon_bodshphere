import NavbarImage from "../assets/profile.png";

const Navbar = () => {
    return (
        <div>
            <nav className="bg-white shadow-md">
                <div className="container mx-auto px-4 flex items-center justify-between h-16">
                    <div className="flex items-center">
                        BODSPHERE
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <a href="/" className="text-gray-700 hover:text-blue-500 font-medium">
                            Home
                        </a>
                        <a
                            href="/"
                            className="text-gray-700 hover:text-blue-500 font-medium"
                        >
                            Categories
                        </a>
                        <a
                            href="/"
                            className="text-gray-700 hover:text-blue-500 font-medium"
                        >
                            Notification
                        </a>
                        <a
                            href="/"
                            className="text-gray-700 hover:text-blue-500 font-medium"
                        >
                            AI Music
                        </a>
                    </div>
                    <div className="flex items-center">
                        <img
                            src={NavbarImage}
                            alt="Profile"
                            className="h-10 w-10 rounded-full border border-gray-300"
                        />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
