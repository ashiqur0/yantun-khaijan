import React from 'react';

export const metadata = {
    title: 'feedbacks'
}

const getFeedback = async () => {
    const res = await fetch('http://localhost:3000/api/feedback');    
    return await res.json();
}

const FeedbackPage = async () => {

    const feedback = await getFeedback();
    console.log(feedback);

    return (
        <div>
            <div className=''>
                <h1 className='text-2xl font-bold'>{feedback.length} Feedbacks Found</h1>
            </div>
        </div>
    );
};

export default FeedbackPage;