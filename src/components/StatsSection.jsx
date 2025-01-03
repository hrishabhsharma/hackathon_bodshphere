const StatsSection = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-full mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-b border-gray-200 pb-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold">190+</h2>
            <p className="text-gray-600">Countries</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold">1,000+</h2>
            <p className="text-gray-600">On-Demand Classes</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold">100K</h2>
            <p className="text-gray-600">Members</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
