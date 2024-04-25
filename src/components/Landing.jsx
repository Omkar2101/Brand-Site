import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


function Landing() {
    
  return (
    <div data-scroll data-scroll-speed="-.2" data-scroll-section className='bg-zinc-800 h-screen w-full pt-1 text-white'>
        <div className='textstructure mt-28 px-10 py-16'>
            
            {["we create","eye-opening ","presentations"].map((item,index)=>
                (
                <div key={index}  className='masker'>
                    <div className='w-fit flex gap-[1px] '>
                        {index===1 && (<motion.div initial={{width:0}}
                                                    animate={{width:"8vw"}} 
                                                    transition={{ease:[0.45, 0, 0.55, 1],duration:0.75}}
                                                    
                                                    className='overflow-hidden rounded-lg mr-[0vw] h-[6vw] w-[8vw] relative -top-[1.2vw] mt-6 mx-2'>
                                                        <img className='mt-3' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                                                    </motion.div>)}
                        <h1 className='font-semibold uppercase  text-[7.5vw]  px-8 leading-[6.5vw] tracking-tighter'>{item}</h1>
                    </div>
                    
                </div>
                )
            )}
            
        </div>

        <div className=' bg-zinc-800 border-zinc-700 border-t-[1px] width-full  flex justify-between items-center py-6 mt-1 px-8'>
            {["For public and private companies","from the first pitch to ipo"].map((item,index)=><p >{item}</p>)}
            <div className='flex gap-3 capitalize'>
                <div className='start px-5 py-2 border-zinc-700 font-light rounded-2xl border-[1px]'>
                Start the project
                </div>

                <div className='flex items-center justify-center border-zinc-500 h-10 w-10 rounded-full border-[1px] '>
                <span className='rotate-[45deg]'>
                <FaArrowUpLong />
                </span>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Landing