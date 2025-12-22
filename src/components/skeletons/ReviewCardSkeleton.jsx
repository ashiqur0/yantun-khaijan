export function ReviewCardSkeleton() {
    return (
        <div className="max-w-md bg-white rounded-2xl border border-gray-100 p-5 animate-pulse">
            {/* Header Skeleton */}
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div className="space-y-2">
                    <div className="h-3 w-24 bg-gray-200 rounded"></div>
                    <div className="h-2 w-16 bg-gray-100 rounded"></div>
                </div>
            </div>

            {/* Stars Skeleton */}
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-4 w-4 bg-gray-100 rounded"></div>
                ))}
            </div>

            {/* Text Skeleton */}
            <div className="space-y-3 mb-8">
                <div className="h-3 w-full bg-gray-100 rounded"></div>
                <div className="h-3 w-full bg-gray-100 rounded"></div>
                <div className="h-3 w-2/3 bg-gray-100 rounded"></div>
            </div>

            {/* Footer Skeleton */}
            <div className="flex gap-6 pt-4 border-t border-gray-50">
                <div className="h-4 w-12 bg-gray-100 rounded"></div>
                <div className="h-4 w-12 bg-gray-100 rounded"></div>
            </div>
        </div>
    );
};