export const FeedbackSkeleton = () => {
    return (
        <div className="max-w-md bg-white border border-gray-100 rounded-xl p-5 w-full animate-pulse">
            {/* Header Skeleton */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-gray-200 rounded-lg"></div>
                    <div className="w-20 h-3 bg-gray-200 rounded"></div>
                </div>
            </div>

            {/* Message Skeleton */}
            <div className="space-y-2 mb-8">
                <div className="w-full h-4 bg-gray-200 rounded"></div>
                <div className="w-5/6 h-4 bg-gray-200 rounded"></div>
            </div>

            {/* Buttons Skeleton */}
            <div className="flex gap-3 border-t pt-4">
                <div className="flex-1 h-10 bg-gray-100 rounded-lg"></div>
                <div className="flex-1 h-10 bg-gray-100 rounded-lg"></div>
            </div>
        </div>
    );
};

// export default FeedbackSkeleton;