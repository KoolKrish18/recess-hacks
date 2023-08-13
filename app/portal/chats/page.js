"use client"

import { useRef, useState } from 'react'

import UserChatPreview from '@components/UserChatPreview'
import pfp from '@public/pfp.png'

import Image from 'next/image'
import Link from 'next/link'

const ChatsPage = () => {

    const elementRef = useRef(null);
    const [arrowDisable, setArrowDisable] = useState(true);

    const handleHorizantalScroll = (element, speed, distance, step) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
        element.scrollLeft += step;
        scrollAmount += Math.abs(step);
        if (scrollAmount >= distance) {
            clearInterval(slideTimer);
        }
        if (element.scrollLeft === 0) {
            setArrowDisable(true);
        } else {
            setArrowDisable(false);
        }
        }, speed);
    };

    const users = Array(20).fill(
            {
                firstName: 'Montgomery',
                lastName: 'Burns',
                avatar: pfp,
                lastMessage: 'This was the last message i send to you',
                favourite: true,
                id: 'yomama'
            }
        )

    return (
        <div className='h-full'>
            <div className='flex flex-col'>
                <h1 className='p-4 text-3xl'>Favourite People</h1>
                <div className='relative w-full'>
                    <div className='relative'>
                        <button className={'absolute left-0 text-gray-400 top-14 ' + (arrowDisable && "hidden")} onClick={() => {
                        handleHorizantalScroll(elementRef.current, 25, 100, -10);}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </button>
                        <button className='absolute right-0 text-gray-400 top-14' onClick={() => {
                            handleHorizantalScroll(elementRef.current, 25, 100, 10);}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                    
                    <div className='flex w-auto gap-4 px-8 py-4 overflow-x-scroll' ref={elementRef}>
                        {users.map((user, index) => (
                            user.favourite && 
                            <Image className='h-full rounded-full w-28' src={user.avatar} alt={user.firstName + " " + user.lastName + "'s profile picture"} key={index}/>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className='flex flex-col h-screen overflow-y-scroll'>
                {users.map((user, index) => (
                    <UserChatPreview key={index} user={user}/>
                ))}
            </div>
        </div>
    )
}

export default ChatsPage