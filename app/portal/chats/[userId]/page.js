"use client"

import { useParams } from 'next/navigation';

const ChatPage = () => {
    const params = useParams();
    const userId = params.userId;

    return (
        <div>{userId}</div>
    )
}

export default ChatPage