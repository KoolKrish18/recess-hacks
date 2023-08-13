import { connectDB, db } from '@app/lib/db';
import { UserModel } from './userModel';
import { NextResponse } from 'next/server';

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
    const body = req.body;

    connectDB();

    try {
        await db.once('open', async () => {
            const newUser = new UserModel({
                email: 'msso',
                firstName: 'sss',
                lastName: 'sss',
                password: 'sss',
                type: 'sss',
                age: 15,
                bio: '2222',
            });
            await newUser.save();
            console.log('User added:', newUser);

            return NextResponse.json({ status: 200 });
        });
    } catch (err) {
        console.log(err.stack);
    } finally {
        await client.close();
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
