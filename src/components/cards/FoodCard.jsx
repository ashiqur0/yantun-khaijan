// FoodCard.jsx
const FoodCard = ({ food }) => {
  const { title, foodImg, price, category } = food;

  const onAddToCart = food => {

  }

  const onViewDetails = food => {

  }

  return (
    <div className="bg-white border rounded-xl shadow-sm hover:shadow-md transition">
      {/* Image */}
      <img
        src={foodImg}
        alt={title}
        className="w-full h-48 object-cover rounded-t-xl"
      />

      {/* Content */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">
          {title}
        </h2>

        <p className="text-sm text-gray-500">
          Category: {category}
        </p>

        <p className="text-lg font-bold text-green-600">
          ৳ {price}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 pt-3">
          <button
            className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition"
          >
            Add to Cart
          </button>

          <button
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;