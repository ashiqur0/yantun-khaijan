import { connect } from '@/app/lib/dbConnect';
import FeedbackForms from '@/components/forms/FeedbackForms';
import React from 'react';

const AddFeedback = () => {

    // directly use the post api to insert feedback to database
    const postFeedback = async (message) => {
        'use server';
        const result = await connect('feedbacks').insertOne({
            message,
            date: new Date()
        });
        return {
            ...result,
            insertedId: result.insertedId.toString()
        };
    }

    return (
        <div>
            <h1>Add Feedback</h1>
            <FeedbackForms postFeedback={postFeedback} />
        </div>
    );
};

export default AddFeedback;