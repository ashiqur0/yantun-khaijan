import { connect } from "@/app/lib/dbConnect";
import { feedback } from "../route"

// create collection
const feedbackCollection = connect('feedbacks');

// get array of feedbacks
export async function GET(request) {

    const result = await feedbackCollection.find().toArray();
    return Response.json(result);
}

// post single feedback
export async function POST(request) {

    const { message } = await request.json();

    // check if the validity of feedback
    if (!message || typeof message !== 'string') {
        return Response.json({
            status: 400,
            message: 'Please send a message'
        });
    }

    const newFeedback = {
        message,
        date: new Date().toISOString()
    };

    const result = await feedbackCollection.insertOne(newFeedback);
    return Response.json(result);
}