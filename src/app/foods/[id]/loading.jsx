// app/foods/[id]/loading.jsx

const FoodDetailsLoading = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 animate-pulse">
      <div className="grid md:grid-cols-2 gap-8 bg-white shadow rounded-xl overflow-hidden">
        {/* Image Skeleton */}
        <div className="w-full h-96 bg-gray-300"></div>

        {/* Content Skeleton */}
        <div className="p-6 space-y-4">
          <div className="h-8 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          <div className="h-6 bg-gray-300 rounded w-1/4"></div>

          <div className="flex gap-4 pt-4">
            <div className="h-10 w-32 bg-gray-300 rounded"></div>
            <div className="h-10 w-32 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsLoading;