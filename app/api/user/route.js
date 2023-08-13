import { UserModel } from './userModel';
import { NextResponse } from 'next/server';
import dbConnect from '@app/lib/dbConnect';

export async function GET(req) {
    await dbConnect();

    try {
        const id = req.query.id;
        const user = await UserModel.findById(id, function (err, docs) {
            if (err) {
                console.log(err);
            } else {
                return docs;
            }
        });
        return NextResponse.json(user);
    } catch (err) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

export async function POST(req) {
    await dbConnect();

    let body = req.body;
    console.log(req);
    try {
        console.log(process.env.MONGODB_URI);
        const newUser = new UserModel(...body);
        await newUser.save();
        return NextResponse.json({ status: 200 });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}

export async function DELETE(req) {
    await dbConnect();

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
    await dbConnect();

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
