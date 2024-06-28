import React from 'react'

function Features() {
  return (
    <div className='w-full py-20'>
        <div className='w-full px-10 py-4 font-["Helvetica"] px-6 border-b-[1px] border-zinc-700'>
            <h1 className='text-7xl leading-none text-white tracking-tight'>Featured Projects</h1>
        </div>
        <div className='mt-10 px-20 '>
            <div className='flex gap-10 '>
                <div className='bg-red-500 w-full h-[75vh] rounded-lg'>
                  <img src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png" alt="" srcset="" />
                </div>
                <div className='bg-red-500 w-full h-[75vh] rounded-lg'>
                  <img src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features