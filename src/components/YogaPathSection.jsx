
const YogaPathSection = () => {
    return (
        <section className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Discover Your Yogic Path
                </h2>
                <p className="text-gray-600 mb-10">
                    Join our community and transform your yoga practice today.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold mb-2">Yoga Teacher Trainings</h3>
                        <p className="text-gray-600">
                            Become certified Yoga Teachers and transform your practice with
                            World’s most accessible & affordable programs.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold mb-2">Yoga Classes</h3>
                        <p className="text-gray-600">
                            Join revitalizing Yoga classes of Yin, Hatha, Ashtanga, Vinyasa
                            and a lot more, to enhance your well-being.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold mb-2">Calm Music</h3>
                        <p className="text-gray-600">
                            Experience tranquility with our calming music, perfect for
                            relaxation and mindfulness.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold mb-2">
                            Pranayama & Meditation
                        </h3>
                        <p className="text-gray-600">
                            Explore the power of breath and enhance your self-awareness and
                            inner peace.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default YogaPathSection;
