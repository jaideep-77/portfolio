import React from 'react'
import AIproject from '../assets/ai2.png';
import NHPI from '../assets/nhpi.png';
import DatabaseProject from '../assets/database.png';

const Projects = () => {
    return (
        <div id='projects' name='projects' className='w-full h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] flex flex-col justify-center w-full h-full mx-auto p-4'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                    <p className='py-6'>Check out some of my projects</p>
                    <p className='md:hidden'> Click on the picture for demo or code</p>
                </div>

                <div className='flex flex-row justify-between'>
                    {/* Single project item below */}

                    <div className='flex flex-col items-center w-[50%] px-5'>
                        <div style={{ backgroundImage: `url(${AIproject})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto custom-css'>
                            <div className='opacity-0 group-hover:opacity-100 flex flex-col items-center'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    AI chat
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href="https://chat-with-ai.netlify.app/" target='_blank' rel="noopener noreferrer">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                    <a href="https://github.com/jaideep-77/AI-Chat" target='_blank' rel="noopener noreferrer">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <span className='mt-2 text-center'>Ask this AI powered bot anything. Implemented using React and OpenAI's text-curie-001 engine.</span>
                    </div>

                    <div className='flex flex-col items-center w-[50%] px-5'>
                        <div style={{ backgroundImage: `url(${NHPI})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto custom-css'>
                            <div className='opacity-0 group-hover:opacity-100 flex flex-col items-center'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    NHPI Statistics
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href="https://github.com/buttar-harmeet/3311ProjGoodCopy" target='_blank' rel="noopener noreferrer">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <span className='mt-2 text-center'>Created using JavaFX, this application can present data on Canada NHPI index using various graphs.</span>
                    </div>

                    <div className='flex flex-col items-center w-[50%] px-5'>
                        <div style={{ backgroundImage: `url(${DatabaseProject})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto custom-css'>
                            <div className='opacity-0 group-hover:opacity-100 flex flex-col items-center'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    Student Database
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href="https://github.com/jaideep-77/Student-Database" target='_blank' rel="noopener noreferrer">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <span className='mt-2 text-center'>Implemented using C, this project simulates a database with data being stored in a text file.</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects