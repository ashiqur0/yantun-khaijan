'use client'

import React, { useEffect, useState } from 'react';

const ReviewsPage = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://taxi-kitchen-api.vercel.app/api/v1/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, []);

    return (
        <div>
            <h2 className='text-4xl font-bold'>Total <span className='text-yellow-500'>{reviews.length}</span> Reviews Found.</h2>

            <div className='grid my-5 grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    reviews.map(food => <FoodCard key={food.id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default ReviewsPage;