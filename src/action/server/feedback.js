'use server';

import { connect } from '@/lib/dbConnect';

// directly use the post api to insert feedback to database
export const postFeedback = async (message) => {
    const result = await connect('feedbacks').insertOne({
        message,
        date: new Date()
    });
    return {
        ...result,
        insertedId: result.insertedId.toString()
    };
}