import { connectDB, db } from '@app/lib/db';
import { UserModel } from './userModel';
import { NextResponse } from 'next/server';

// Leave this here for now LOL, idk if its important
connectDB();
export async function GET(req) {
    let searchURL = new URL(req.url);
    let searchParams = searchURL.searchParams;
    const email = searchParams.get('email');

    console.log(email);

    let user = await UserModel.findOne({ email: email });
    return NextResponse.json({ user: user }, { status: 200 });
}

export async function POST(req) {
    const body = await req.json();

    try {
        const newUser = new UserModel(body);
        console.log(newUser);

        await newUser.save();
        console.log('User added:', newUser);

        return NextResponse.json({ user: newUser }, { status: 200 });
    } catch (err) {
        console.log(err.stack);
    }
}

export async function DELETE(req) {
    try {
        const email = req.query.email;
        await UserModel.findOneAndDelete({ email: email });

        return NextResponse.json({ status: 200 });
    } catch (err) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

// TODO This needs to be fixed lol
export async function PUT(req) {
    try {
        const email = req.query.email;
        const newData = req.body;
        await UserModel.findOneAndUpdate({ email: email }, newData);

        return NextResponse.json({ status: 200 });
    } catch (err) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
// LEAVE GET Request code here for now
/*    connectDB().then(async () => {
        try {
            await db.once('open', async () => {
                console.log('sss');
                let user = await UserModel.findOne({ email: email });
                console.log(user);
                return NextResponse.json({ user: user }, { status: 200 });
            });
        } catch (err) {
               return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        ); 
        }
    }); */
