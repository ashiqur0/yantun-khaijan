import React from 'react';
import ReviewsPage from './ReviewsPage';

export const metadata = {
  title: "All Reviews",
  description: "Get All Reviews",
};

const AllReviews = () => {
    return (
        <div>
            <ReviewsPage></ReviewsPage>
        </div>
    );
};

export default AllReviews;