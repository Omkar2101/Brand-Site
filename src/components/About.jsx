import React from 'react'

function About() {
  return (
    <div className='bg-[#a4e964] p-20 rounded-lg'>
        <h1 className='text-[8vh] leading-10 tracking-tight '>Ochi is a strategic partner for
            fast-grow­ing tech businesses that
            need to raise funds, sell prod­ucts,
            ex­plain com­plex ideas, and hire great peo­ple.
        </h1>

        <div className='border-t-[1px] mt-20  w-full flex  border-zinc-500 mt-6'>
            <div className='w-1/2'>
                <h1 className='text-[8vh] leading-10 tracking-tight mt-4 '>Our approach</h1>
                <button className='bg-zinc-800 flex items-center gap-3 justify-center  rounded-full py-2 px-6 mt-4 text-white'>Read More
                <div className='bg-white rounded-full h-3 w-3 '></div>
                </button>

            </div>
            <div className='w-1/2 h-[64vh] bg-white rounded-xl mt-4 overflow-hidden fit-cover '>
                    <img  src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" srcset="" />
            </div>
            
                
        </div>
    </div>
  )
}

export default About