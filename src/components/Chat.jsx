import React, { useState } from 'react';
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';
import { Link } from "react-router-dom"
const Chat = () => {
    const [userInput, setUserInput] = useState('');
    const [chat, setChat] = useState([]);
    const [apiResponse, setApiResponse] = useState('hello');
    const [loading, setLoading] = useState(false);

    console.log(chat)
    const addMessage = (message, isUser) => {
        setChat((prevChat) => [...prevChat, { message, isUser }]);
    };

    const sendRequestToAPI = async () => {
        if (userInput) {
            addMessage(userInput, true);
            setLoading(true);

            try {
                const response = await axios.post('https://chatbot-nit.onrender.com/json', {
                    request_data: userInput
                });

                console.log("response", response.data);

                if (response.status === 200) {
                    setApiResponse(response.data.generated_text);
                    addMessage(response.data.generated_text, false);
                } else {
                    console.error('API request failed');
                }
            } catch (error) {
                console.error('Error sending API request', error);
            } finally {
                setLoading(false);
            }

            setUserInput('');
        }
    };

    return (
        <>
            <div className="flex items-center p-4 bg-purple-500">
                <div className="flex-shrink-0 hover:bg-green-500">
                    <Link to="/home">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>
                    </Link>
                </div>
                <h1 className="flex-grow mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 text-center md:text-5xl lg:text-6xl dark:text-white">Kisan Mitra chatbot</h1>
            </div>



            <div className="flex  flex-col bg-gray-100 m-2">
                <div className="space-y-4">
                    {chat.map((message, index) => (
                        <div
                            key={index}
                            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`${message.isUser ? 'bg-blue-500 text-white font-medium m-2' : 'bg-green-100 w-1/2 text-gray-800  font-medium m-2'
                                    } p-3 rounded-lg max-w-3/4`}
                            >
                                {message.message}
                            </div>
                        </div>
                    ))}

                    {loading && (
                        <div className="flex justify-start">
                            <RotatingLines
                                strokeColor="grey"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width={30}
                                visible={true}
                            />
                        </div>
                    )}
                </div>

                <div className="flex items-center p-4 ">



                    <textarea
                        type="text"
                        placeholder="Type your message..."
                        className=" flex-1 p-5 m-10  bg-green-100 focus:outline  font-medium rounded-lg"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') sendRequestToAPI();
                        }}
                    />


                    <button
                        className="p-10 bg-blue-500  text-white px-4 py-2 rounded-full ml-3 hover:bg-blue-600 w-20 h-20"
                        onClick={sendRequestToAPI}
                    >
                        Send
                    </button>
                </div>
            </div>
        </>
    );
};

export default Chat;
