import React, { useState } from 'react'
import { useEffect } from 'react'



function Eyes() {

    const [rotate,setRotate]=useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove",function(e){
        const xcor=e.clientX;
        const ycor=e.clientY;
        const deltax=xcor-window.innerWidth/2;
        const deltay=ycor-window.innerWidth/2;
        const theta=Math.atan2(deltay, deltax);
        const thetadeg=theta*(180/(Math.PI));
        
        setRotate(thetadeg-180);
        
        
    })

})


//line ji ahe red tila apan jsx and style cha use karun as akahi denar jenekarun te rotate karel ////

  return (
    <div className='w-full h-screen bg-white overflow-hidden p-16'>
        <div data-scroll data-scroll-section data-scroll-speed="-0.8" className='relative eyes w-full h-screen bg-cover  bg-[url(https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]  '>
            <div className='absolute overflow-hidden flex gap-16 justify-evenly rounded-xl w-1/2 h-1/2 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className='bg-zinc-800 flex items-center justify-center rounded-full  w-1/3 h-2/3'>
                    <div style={{transform:` rotate(${rotate}deg)`}} className='line w-[10vw] h-[2vw]  '>
                        <div className='bg-zinc-100 h-[4vw] w-[4vw] rounded-full'></div>
                    </div>
                    
                </div>
            <div className='bg-zinc-800 flex items-center justify-center rounded-full w-1/3 h-2/3'>
                    
                <div style={{transform:` rotate(${rotate}deg)`}} className='line w-[10vw] h-[2vw] '>
                        <div className='bg-zinc-100  h-[4vw] w-[4vw] rounded-full'></div>
                    </div>

                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Eyes