import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

// create and | or connect collection
const feedbackCollection = connect('feedbacks');

// get individual feedback using id
export async function GET(request, { params }) {
    const { id } = await params;

    if (id.length != 24) {
        return Response.json({
            status: 400,
            message: 'send correct id'
        })
    }

    const query = { _id: new ObjectId(id) };
    const result = await feedbackCollection.findOne(query);
    return Response.json(result);
}

// delete individual feedback using id
export async function DELETE(request, { params }) {
    const { id } = await params;

    if (id.length != 24) {
        return Response.json({
            status: 400,
            message: 'send correct id'
        })
    }

    const query = { _id: new ObjectId(id) };
    const result = await feedbackCollection.deleteOne(query);
    return Response.json(result);
}

// update individual feedback using id
export async function PATCH(request, { params }) {
    const { id } = await params;
    const { message } = await request.json();

    if (id.length != 24) {
        return Response.json({
            status: 400,
            message: 'send correct id'
        })
    }

    if (!message || typeof message !== 'string') {
        return Response.json({
            status: 400,
            message: 'Please send a message'
        });
    }

    const query = { _id: new ObjectId(id) };
    const newData = {
        $set: {
            message
        }
    }
    const result = await feedbackCollection.updateOne(query, newData);
    return Response.json(result);
}