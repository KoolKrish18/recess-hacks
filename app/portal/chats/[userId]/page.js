"use client"

import { useRef, useState, useEffect } from 'react'
import { useParams } from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link'

import MessagesDisplay from '@components/MessagesDisplay';
import pfp from '@public/pfp.png'

const ChatPage = ({ userId }) => {

    const [textMessage, setTextMessage] = useState('');
    const textRef = useRef(null);
    
    useEffect(() => {
        textRef.current.focus();
    }, []);


    const params = useParams();
    const receiverId = params.userId;
    const userIdPlaceholder = "userId1";

    //Request the user's messages from the server based on the user's ID

    //get the user's info and the info from the receiver

    const messages = [
        {user:'userId1', text: "Hello, how are you?"},
        {user:'userId2', text: "I'm doing well, how about you?"},
        {user:'userId1', text: "I'm doing good too, thanks for asking!"},
        {user:'userId2', text: "No problem!"},
        {user:'userId1', text: "How's your day going?"},
        {user:'userId2', text: "It's going great!"},
        {user:'userId1', text: "That's good to hear!"},
        {user:'userId2', text: "Yeah, it is!"},
        {user:'userId1', text: "I'm glad you're having a good day!"},
        {user:'userId2', text: "Thanks!"},
        {user:'userId1', text: "No problem!"},
        {user:'userId2', text: "What are you up to?"},
        {user:'userId1', text: "Nothing much, just chilling."},
        {user:'userId2', text: "That's cool!"},
        {user:'userId1', text: "Yeah, it is!"},
        {user:'userId2', text: "I'm gonna go now, bye!"},
        {user:'userId1', text: "Bye!"},
        {user:'userId2', text: "This is a message that is longer than 1 line of text in the text message so this might mess some things up but we will see igigigigi"}
    ]

        
    const receiverName = "John Doe"

    const handleSubmit = (e) => {
        e.preventDefault();
        if(textMessage === '') return;
        //Send the message to the server
        setTextMessage('');
    }

    return (
        <div className='flex flex-col h-full'>
            <div className='flex items-center w-full gap-8 px-8 py-4 text-2xl shadow-sm'>
                <Link href='/portal/chats'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </Link>
                <div className='flex items-center gap-4'>
                    <Image className='w-12 rounded-full' src={pfp} alt={receiverName + " profile picture"}/>
                    <h1>{receiverName}</h1>
                </div>
            </div>
            <div className='flex-grow'>
                <MessagesDisplay messages={messages} userId={userIdPlaceholder} receiverId={receiverId}/>
            </div>
            <div className="flex flex-col p-2 bg-gray-100">
                <form className="flex gap-2" onSubmit={handleSubmit}>
                    <input type="text" 
                            ref={textRef}
                            value={textMessage}
                            onChange={(e) => {setTextMessage(e.target.value)}}
                            placeholder="Type your message here" 
                            className="flex-grow p-2 px-4 bg-white border rounded-full"/>
                    <button type="submit" className="p-3 text-white bg-gray-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                    </button>
                </form>           
            </div>
        </div>
                
    )
}

export default ChatPage