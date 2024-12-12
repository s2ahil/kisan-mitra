import React from 'react'
import { Card } from '../components/index'
const Home = () => {
    return (
        <div>
            <div className='bg-purple-500 p-2'>


                <div className='mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl  lg:text-6xl dark:text-white '>Location based chatbot based on your interest</div>
            </div>
            <div className='flex gap-5 m-10 flex-wrap justify-center'>
                <Card name="chatbot for farmers" desc="Tells you about schemes available all  over india" image="https://imgs.search.brave.com/oByJMBbnFyHe66Qe9A7Txi68QBv_M2PN2j0KMYvH0ok/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMub2Rpc2hhdHYu/aW4vdXBsb2FkaW1h/Z2UvbGlicmFyeS8x/Nl85LzE2XzlfMC9y/ZWNlbnRfcGhvdG9f/MTY4MTQ1NzY3NS53/ZWJw" tag1="India" tag2="Farmers scheme" btnLink="/chat/india"></Card>
                <Card name="chatbot for medical query" desc="Resolve your query for medical schemes " image="https://imgs.search.brave.com/tN_Ie_lJy7kPvU-H3WEczt5mrsBNCxwgL2OlfHaZ1Jg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMmp4/MnJlcnJnNnNoMy5j/bG91ZGZyb250Lm5l/dC9pbWFnZXMvQXJ0/aWNsZV9JbWFnZXMv/SW1hZ2VGb3JBcnRp/Y2xlXzIyNDU3XzE2/NTE2Nzg4NzMwNDcz/MjQ5LmpwZw" tag1="Medical" tag2="schemes" btnLink="/chat/india"></Card>

            </div>

        </div>
    )
}

export default Home
