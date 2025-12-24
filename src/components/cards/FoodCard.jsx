import Link from "next/link";
import CardButton from "../buttons/CardButton";

import style from '@/app/foods/foods.module.css'
import Image from "next/image";

// FoodCard.jsx
const FoodCard = ({ food }) => {
  const { title, foodImg, price, category, id } = food;

  return (
    <div className={`bg-white border rounded-xl shadow-sm hover:shadow-md transition ${style.bgred}`}>
      {/* Image */}
      {/* <img
        src={foodImg}
        alt={title}
        className="w-full h-48 object-cover rounded-t-xl"
      /> */}

      <Image
        width={300}
        height={150}
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
          <CardButton food={food}></CardButton>

          <Link href={`/foods/${id}`}
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;