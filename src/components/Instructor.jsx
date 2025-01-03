import InstructorImage1 from "../assets/yoga1.jpg";
import InstructorImage2 from "../assets/yoga2.jpg";
import InstructorImage3 from "../assets/yoga3.jpg";
import InstructorImage4 from "../assets/yoga4.jpg";

const profiles = [
    {
        name: "Preetika Bhatnagar",
        image: InstructorImage1
    },
    {
        name: "Samarthya Bhatnagar",
        image: InstructorImage2
    },
    {
        name: "Diana",
        image: InstructorImage3
    },
    {
        name: "Herkeesh",
        image:InstructorImage4
    },
];

const InstructorSlider = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Meet Your Instructors</h2>
                <p className="text-gray-600 mb-8">
                    We work with the finest professionals to ensure you feel your best.
                </p>

                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {profiles.map((profile, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                <img
                                    src={profile.image}
                                    alt={profile.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 text-center">
                                    <h3 className="text-lg font-semibold">{profile.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstructorSlider;
