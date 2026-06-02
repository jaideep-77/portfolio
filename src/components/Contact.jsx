import React from 'react'

const Contact = () => {
    return (
        <div id='contact' name='contact' className='w-full pt-[80px] bg-[#0a192f] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/50e5ece3-806c-463a-9925-46b572f921c9" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline text-gray-300 border-pink-600 border-b-4'>Contact</p>
                </div>
                <input type="text" placeholder='Name' name='name' className='p-2 bg-[#ccd6f6]' />
                <input type="email" placeholder='Email' name='email' className='my-4 p-2 bg-[#ccd6f6]' />
                <textarea name="message" rows="10" placeholder='Message' className='p-2 bg-[#ccd6f6]'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
            </form>
        </div>
    )
}

export default Contact