// FoodCardSkeleton.jsx
const FoodCardSkeleton = () => {
  return (
    <div className="bg-white border rounded-xl shadow-sm animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-48 bg-gray-300 rounded-t-xl"></div>

      {/* Content skeleton */}
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>

        <div className="flex gap-3 pt-3">
          <div className="h-10 bg-gray-300 rounded-lg flex-1"></div>
          <div className="h-10 bg-gray-300 rounded-lg flex-1"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;