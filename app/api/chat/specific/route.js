import { connectDB } from '@app/lib/db';
import ChatModel from '../chatModel';
import { NextResponse } from 'next/server';

/*
    @ Description of all possible endpoints:
    * GET: Get single chat between two users
        ? userEmail: email of user
        ? receiverEmail: email of other user
        > Returns: Array of messages
*/

//! THIS IS IMPORTANT, learned this the hard way LOL
connectDB();

// Get all chats for a user
export async function GET(req) {
    let searchURL = new URL(req.url);
    let searchParams = searchURL.searchParams;
    const userEmail = searchParams.get('userEmail');
    const receiverEmail = searchParams.get('receiverEmail');

    try {
        // Find all chats and send back
        const messages = await ChatModel.find({
            $and: [
              { people: { $in: [userEmail] } },
              { people: { $in: [receiverEmail] } }
            ]
        });
        console.log(messages)
        return NextResponse.json({ messages: messages }, { status: 200 });
    } catch (err) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}