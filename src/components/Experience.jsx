import React from 'react'

const Experience = () => {
    return (
        <div id='experience' name='experience' className='w-full pt-[80px] bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right mb-8 ml-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            Experience
                        </p>
                    </div>
                </div>
                <div>

                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='sm:text-right text-3xl font-bold'>
                            <p><label className='text-lg'>Software Engineer at </label>  <label className='text-pink-600 ml-2 text-4xl'>Microsoft</label></p>
                            <p className='text-2xl py-2'>Aug 2025 - Present</p>
                        </div>
                        <div className='text-l space-y-2'>
                            <p>
                                New Grad SWE on CloudGov team
                            </p>
                            <p>
                                Help acheive security compliance for Azure tenants through security policies
                            </p>
                        </div>
                    </div>

                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 my-10 px-4'>
                        <div className='sm:text-right text-3xl font-bold'>
                            <p><label className='text-lg'>Software Engineer Intern at </label>   <label className='text-pink-600 ml-2 text-4xl'>Microsoft</label></p>
                            <p className='text-2xl py-2'>June - Aug 2024</p>
                        </div>
                        <div className='text-l space-y-2'>
                            <p>
                                SWE intern under Azure Security
                            </p>
                            <p>
                                Developed POC to leverage ML and LLMs to minimize false positive detections for credential leaks
                            </p>
                        </div>
                    </div>

                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 my-10 px-4'>
                        <div className='sm:text-right text-3xl font-bold'>
                            <p><label className='text-lg'>Software Engineer Intern at </label><label className='text-pink-600 ml-2 text-4xl'>Amazon</label></p>
                            <p className='text-2xl py-2'>May - Aug 2023</p>
                        </div>
                        <div className='text-l space-y-2'>
                            <p>
                                SWE intern under Amazon Ads
                            </p>
                            <p>
                                Synced business data for sponsored ads on Amazon.com from S3 to DynamoDB allowing for audit capabilities and bulk changes through CSV files (Using lambda integrations)
                            </p>
                        </div>
                    </div>

                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 my-10 px-4'>
                        <div className='sm:text-right text-3xl font-bold'>
                            <p><label className='text-lg'>Software Engineer Intern at </label><label className='text-pink-600 ml-2 text-4xl'>Top Hat</label></p>
                            <p className='text-2xl py-2'>Sept 2022 - Dec 2022</p>
                        </div>
                        <div className='text-l space-y-2'>
                            <p>
                                SWE intern on Gatekeepers team
                            </p>
                            <p>
                                Contributed to features such as new home screen, sign up email verification, rate limiting and removing dependencies on known vulnerable packages
                            </p>
                        </div>
                    </div>

                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='sm:text-right text-4xl font-bold'>
                            <p> <label className='text-lg'>Software Engineer Intern at </label><label className='text-pink-600 ml-2'>Assent</label></p>
                            <p className='text-2xl py-2'>Sept 2021 - Aug 2022</p>
                        </div>
                        <div className='text-l space-y-2'>
                            <p>
                                SWE intern on Data Delivery Team
                            </p>
                            <p>
                                Worked on creating UI elements - dashboards, drilldowns, etc
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Experience