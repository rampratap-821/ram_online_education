const AnyQuestion = () => {
  return (
    <div className="relative w-full pb-10 ">
      {/* Background Image */}
      <div
        className="h-[200px] md:h-[350px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://eduma.thimpress.com/wp-content/uploads/2022/06/Rectangle-410-2.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 "></div>

        {/* Text Content */}
        <div className="relative text-center text-white z-10 ">
          <p className="text-lg md:text-xl font-medium">
            If You Have Any Questions
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mt-1">
            You Can Call Me 24/7
          </h2>

          <button className="mt-4 bg-yellow-400 text-black px-5 py-2 text-sm font-semibold rounded">
            CALL US NOW
          </button>
        </div>
      </div>

      {/* Card Section */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative -mt-24 grid md:grid-cols-2 shadow-lg rounded-md overflow-hidden">
          
          {/* Left Content */}
          <div className="bg-white p-6 md:p-8">
            <h3 className="text-lg font-semibold mb-2">
              Take the First Step
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* Steps */}
            {[
              "Forward Thinking",
              "Actionable Content",
              "Forward Thinking",
            ].map((item, index) => (
              <div key={index} className="flex items-start mb-4">
                <span className="text-gray-300 text-xl font-bold mr-3">
                  0{index + 1}
                </span>
                <div>
                  <p className="font-medium text-gray-800">{item}</p>
                  <p className="text-xs text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Form */}
          <div className="bg-green-700 p-6 md:p-8 text-white">
            <h3 className="text-lg font-semibold mb-4">
              Didn’t find the answer?
            </h3>

            <form className="space-y-3">
              <input
                type="text"
                placeholder="Name *"
                className="w-full px-3 py-2 rounded text-black text-sm outline-none"
              />
              <input
                type="email"
                placeholder="Email *"
                className="w-full px-3 py-2 rounded text-black text-sm outline-none"
              />
              <input
                type="text"
                placeholder="Subject *"
                className="w-full px-3 py-2 rounded text-black text-sm outline-none"
              />
              <textarea
                rows="4"
                placeholder="Message *"
                className="w-full px-3 py-2 rounded text-black text-sm outline-none"
              ></textarea>

              <button
                type="submit"
                className="bg-yellow-400 text-black px-4 py-2 text-sm font-semibold rounded"
              >
                SUBMIT
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AnyQuestion;