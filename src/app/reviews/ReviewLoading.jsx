import { ReviewCardSkeleton } from '@/components/skeletons/ReviewCardSkeleton';
import React from 'react';

const ReviewLoading = () => {
    return (
        <div className='grid my-5 grid-cols-1 md:grid-cols-3 gap-5'>
            {
                [...new Array(12)].map((_, index) => <ReviewCardSkeleton key={index}></ReviewCardSkeleton>)
            }
        </div>
    );
};

export default ReviewLoading;