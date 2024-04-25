import React from 'react'

function Cards() {
  return (
    <div>
        <div className='write text-white  text-6xl p-8 border-b-[1px] border-zinc-600 tracking-tighter leading-3 m-14'>
            New Addons
        </div>
        <div className='h-[100vw] w-full  flex gap-10 p-20 mt-30'>
            <div className='  container w-[40vw] h-[40vh] '>
                <div className=' relative flex justify-center items-center rounded-lg w-full h-[38vh] bg-black'>
                    <img className='absolute hover:scale-75 transition-ease ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute px-4 py-1 rounded-lg bottom-6 left-6 bg-red-200'>Explore &copy;2023</button>
                </div>
                
            </div>
            <div className='container w-1/2 h-[38vh] flex gap-10 '>
                <div className='flex justify-center items-center w-[30vw] rounded-lg bg-zinc-900'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                </div>
                <div className='flex justify-center items-center w-[30vw] rounded-lg bg-zinc-900 '>
                    <img className='p-16' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                </div>
        </div>
    </div>
    </div>
    
  )
}

export default Cards