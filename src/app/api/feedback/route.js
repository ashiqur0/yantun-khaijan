import { connect } from "@/lib/dbConnect";
import { feedback } from "../route"
import { revalidatePath } from "next/cache";

// create and | or connect collection
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
    revalidatePath('feedback');
    return Response.json(result);
}