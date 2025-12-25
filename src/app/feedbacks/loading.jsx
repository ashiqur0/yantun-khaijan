import React from 'react';
import { FeedbackSkeleton } from '@/components/skeletons/FeedbackSkeleton';

const FeedbackLoading = () => {
    return (
        <div>
            <div className='grid my-5 grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    [...Array(12)].map((_, index) => <FeedbackSkeleton key={index} />)
                }
            </div>
        </div>
    );
};

export default FeedbackLoading;