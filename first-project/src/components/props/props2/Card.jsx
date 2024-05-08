import React from 'react'

const Card = () => {
  return (
    <div className='w-[250px] bg-slate-100 rounded-md text-center pb-5 m-3 '>
        <img src='src\assets\HRX.jpeg' className='w-[100%] h-[250px] rounded-md'/>
        <h2 className='text-[1.65rem] font-semibold my-2'>Hrithik Roshan</h2>
        <p className='text-justify px-5 mb-4 text-[1.15rem]'>Hrithik Roshan is an Indian actor who works in Hindi cinema. 
            He has portrayed a variety of characters and is known for his dancing skills.
        </p>
        <div className='flex gap-4 justify-center'>
            <p className='font-semibolde bg-[#1581ab] text-[white] py-1 px-3 text-[1rem] rounded w-[fit-content] '>War</p>
            <p className='font-semibolde bg-[#1581ab] text-[white] py-1 px-3 text-[1rem] rounded w-[fit-content]'>Krrish</p>
            <p className='font-semibolde bg-[#1581ab] text-[white] py-1 px-3 text-[1rem] rounded w-[fit-content]'>Lakshya</p>
        </div>
    </div>
  )
}

export default Card
