import { connectDB, db } from '@app/lib/db';
import UserModel from '../userModel';
import { NextResponse } from 'next/server';

/*
    @ Description of all possible endpoints:
    * POST: Get all data for a user
        ? email: email of user
        > Returns: User email
*/

connectDB();

export async function POST(req) {
    const userData = await req.json();
    // Find and return one user based on email
    let user = await UserModel.findOne({ email: userData.email });

    if (user.password === userData.password) {
        return NextResponse.json({ user: user }, { status: 200 });
    } else {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
}
