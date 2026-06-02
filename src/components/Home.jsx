import React from 'react'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen pt-[80px] bg-[#0a192f]'>
            <div className='max-w-max mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600 text-5xl'>Hi, my name is</p>
                <h1 className='text-5xl sm:text-9xl font-bold text-[#ccd6f6]'>Jaideep Kular</h1>
                <h2 className='text-5xl sm:text-5xl font-bold text-[#8892b0]'>SWE @ Microsoft</h2>
                <p className='text-[#8892b0] pt-4 max-w-[700px]'> Prev at Amazon, TopHat, Assent</p>
            </div>
        </div>
    )
}

export default Home;