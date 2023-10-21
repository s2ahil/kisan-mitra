import React from 'react'
import { Card } from '../components/index'
const Home = () => {
    return (
        <div>
            <div className='bg-purple-500 p-2'>


                <div className='mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl dark:text-white '>Location based chatbot based on your interest</div>
            </div>
            <div className='flex gap-5 m-10 flex-wrap justify-center'>
                <Card name="chatbot for all over india" desc="Tells you about schemes available all  over india" image="https://i.ytimg.com/vi/UHCxrI7UExU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB4QnoPVakrf3V-Wsc1kWuYLVosWA" tag1="India" tag2="Farmers scheme" btnLink="/chat/india"></Card>
                <Card name="chatbot for Madhya Pradesh" desc="Tells you about schemes in madhya pradesh" image="https://bep-wordpress.byjusexamprep.com/wp-content/uploads/2023/08/28170756/external-image-7217.jpg" tag1="Madhya pradesh" tag2="Farmers scheme" btnLink="/chat/india"></Card>

            </div>

        </div>
    )
}

export default Home