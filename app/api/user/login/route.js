import { connectDB, db } from '@app/lib/db';
import UserModel from './userModel';
import { NextResponse } from 'next/server';

/*
    @ Description of all possible endpoints:
    * GET: Get all data for a user
        ? email: email of user
        > Returns: User email
    * POST: Create a new user
        ? userData: object of user data (conforming to UserModel)
        > Returns: User object
    * PUT: Update a user - (usually to add chat, acheivements, etc.)
        ? email: email of user
        > Returns: Status code
    * DELETE: Delete a chat
*/

connectDB();

export async function GET(req) {
    let searchURL = new URL(req.url);
    let searchParams = searchURL.searchParams;
    const email = searchParams.get('email');

    // Find and return one user based on email
    let user = await UserModel.findOne({ email: email });
    if (user) {
        return NextResponse.json({ user: user }, { status: 200 });
    } else {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
}
