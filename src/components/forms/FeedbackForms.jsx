'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const FeedbackForms = ({ postFeedback }) => {

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = e.target.message.value;
        const data = await postFeedback(message);

        // const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback`, {
        //     method: "POST",
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify({ message })
        // });
        // const data = await res.json();

        if (data.insertedId) {
            alert('success');
            router.push('/feedbacks')
        }
    }

    return (
        <div className='p-3'>
            <form onSubmit={handleSubmit}
                className='flex flex-col space-y-5'>
                <textarea
                    className='w-xl border border-dashed'
                    name='message'
                    cols='30'
                    rows={'10'}
                    required
                />

                <button className='btn w-80'>Add Feedback</button>
            </form>
        </div>
    );
};

export default FeedbackForms;