
import { ImQuotesLeft } from "react-icons/im";

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Bodsphere has made Yoga accessible and affordable for everyone. So grateful!",
            name: "Alejandra Martinez",
            country: "Argentina",
        },
        {
            quote: "Super happy to be a part of the Bodsphere Revolution!",
            name: "Katerina Smith",
            country: "United States of America",
        },
        {
            quote: "Bodsphere's Platform is a gift for this World",
            name: "Diego Rodriguez",
            country: "Spain",
        },
        {
            quote: "Bodsphere Accreditation, Courses, etc - So powerful!",
            name: "Susana Fernandes",
            country: "Thailand",
        },
    ];

    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                    What Our Clients Say
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow p-6 flex flex-col"
                        >
                            <div className="text-gray-400 text-5xl mb-4"><ImQuotesLeft /></div>
                            <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                            <div className="mt-auto">
                                <p className="text-gray-800 font-semibold">
                                    {testimonial.name}
                                </p>
                                <p className="text-gray-500 text-sm">{testimonial.country}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
