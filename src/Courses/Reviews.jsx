import { FaStar } from "react-icons/fa";

const Reviews = ()=> {
  const ratings = [
    { star: 5, value: 0 },
    { star: 4, value: 0 },
    { star: 3, value: 0 },
    { star: 2, value: 0 },
    { star: 1, value: 0 },
  ];

  return (
    <div className=" p-6 border ">
      {/* Header */}
      <h2 className="text-sm font-semibold text-gray-700 border-b pb-2 mb-6">
        REVIEWS
      </h2>

      <div className="flex gap-10">
        {/* Left Side */}
        <div className="flex flex-col items-center justify-center min-w-[120px]">
          <h1 className="text-6xl font-semibold text-gray-800">0.0</h1>

          {/* Stars */}
          <div className="flex gap-1 my-2 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          <p className="text-sm text-gray-500">0 ratings</p>
        </div>

        {/* Right Side */}
        <div className="flex-1 space-y-3">
          {ratings.map((item) => (
            <div key={item.star} className="flex items-center gap-3">
              {/* Star number */}
              <span className="text-sm text-gray-600 w-4">
                {item.star}
              </span>

              {/* Star icon */}
              <FaStar className="text-yellow-400" />

              {/* Progress bar */}
              <div className="flex-1 h-3 bg-gray-300 rounded">
                <div
                  className="h-3 bg-yellow-400 rounded"
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>

              {/* Count */}
              <span className="text-sm text-gray-600 w-6 text-right">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Reviews;