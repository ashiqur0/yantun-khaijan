import { getFeedback } from '@/action/server/feedback';
import FeedbackCard from '@/components/cards/FeedbackCard';
import Link from 'next/link';
import React from 'react';
// import { connect } from '../../lib/dbConnect';

export const metadata = {
    title: 'feedbacks'
}

export const dynamic = 'force-dynamic';

// const getFeedback = async () => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback`, {
//         cache: 'force-cache',
//         next: { revalidate: 60 }
//     });
//     return await res.json();
// }

const FeedbackPage = async () => {
    // const feedback = await getFeedback(); // get usign api
    // const feedback = await connect('feedbacks').find().toArray(); //short cut
    const feedback = await getFeedback(); //get without api
    
    return (
        <div>
            <div className=''>
                <h1 className='text-2xl font-bold'>{feedback.length} Feedbacks Found</h1>

                <Link href={'/feedbacks/add'} className='btn'>Add Feedback</Link>

                <div className='grid grid-cols-3 gap-3 mt-5'>
                    {
                        feedback.map(f => <FeedbackCard key={f._id} f={f}></FeedbackCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FeedbackPage;