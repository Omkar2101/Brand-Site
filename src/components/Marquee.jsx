import React from 'react'
import { motion } from "framer-motion"

function MArquee() {
  return (
    <div data-scroll data-scroll-section  data-scroll-speed=".01"  className='bg-green-900 py-16 mt-16 w-full rounded-3xl text-white '>
        <div className=' overflow-hidden py-8 flex uppercase whitespace-nowrap leading-none font-bold font-["Gilroy"]  gap-10 border-t-[1px] border-b-[1px] border-zinc-200'>
            <motion.h1
            className='text-[30vh]'
            initial={{ x: '0' }} // Start offscreen to the left
            animate={{ x: '-100vw' }} // Move across the screen
            transition={{ duration: 5, ease: 'linear', repeat: Infinity, repeatType: 'loop' }} >We are ochi</motion.h1>
            
            <motion.h1
            className='text-[30vh]'
            initial={{ x: '0' }} // Start offscreen to the left
            animate={{ x: '-100vw' }} // Move across the screen
            transition={{ duration: 5, ease: 'linear', repeat: Infinity, repeatType: 'loop' }} >We are ochi </motion.h1> 

            <motion.h1
            className='text-[30vh]'
            initial={{ x: '0' }} // Start offscreen to the left
            animate={{ x: '-100vw' }} // Move across the screen
            transition={{ duration: 5, ease: 'linear', repeat: Infinity, repeatType: 'loop' }} >We are ochi </motion.h1>
        </div>
    </div>
  )
}

export default MArquee
