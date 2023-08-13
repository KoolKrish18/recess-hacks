import Chat from './chatModel';
import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        console.log('ss');
        const userEmail = req.query.email;
        const chatData = await Chat.findOne({ people: userEmail });

        return NextResponse.json(chatData);
    } catch (err) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

export async function POST(req) {
    try {
        const chatData = req.body;
        const peopleEmails = req.body.people;
        const newChat = new Chat({
            ...chatData,
            _id: peopleEmails,
        });
        await Chat.create(newChat);

        return NextResponse.json({ status: 201 });
    } catch (err) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

export async function PUT(request) {}

export async function DELETE(request) {
    try {
        const userEmail = req.query.email;
        await Chat.findByIdAndDelete(chatId);

        return NextResponse.json({ status: 200 });
    } catch (err) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
