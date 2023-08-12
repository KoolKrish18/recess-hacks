import UserChatPreview from '@components/UserChatPreview'
import pfp from '@public/pfp.png'

import Image from 'next/image'
import Link from 'next/link'

const ChatsPage = () => {

    const users = Array(10).fill(
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
        <div className='h-full overflow-y-scroll'>
            <div className='flex flex-col'>
                <h1 className='p-4 text-3xl'>Favourite People</h1>
                <div className='flex w-auto gap-4 px-8 py-4 overflow-x-scroll'>
                    {users.map((user, index) => (
                        user.favourite && 
                        <Image className='h-full rounded-full w-28' src={user.avatar} alt={user.firstName + " " + user.lastName + "'s profile picture"} key={index}/>
                    ))}
                </div>
            </div>
            
            <div className='flex flex-col h-full'>
                {users.map((user, index) => (
                    <UserChatPreview key={index} user={user}/>
                ))}
            </div>
        </div>
    )
}

export default ChatsPage