import React from 'react'

const Card = (props) => {
  return (
        <div className='w-[350px] h-[450px] bg-slate-100 rounded-md text-center pb-[5] '>
        <img src={props.user.image} className='w-[100%] h-[200px] rounded-md'/>
        <h2 className='text-[1.65rem] font-semibold my-2'>{props.user.actorName}</h2>
        <p className='text-justify px-5 mb-4 text-[1.15rem]'>{props.user.about}</p>
        <div className='flex gap-4 justify-center'>
            <p className='font-semibolde bg-[#1581ab] text-[white] py-1 px-2 text-[0.7rem] rounded w-[fit-content] '>{props.user.movie1}</p>
            <p className='font-semibolde bg-[#1581ab] text-[white] py-1 px-2 text-[0.7rem] rounded w-[fit-content]'>{props.user.movie2}</p>
            <p className='font-semibolde bg-[#1581ab] text-[white] py-1 px-2 text-[0.7rem] rounded w-[fit-content]'>{props.user.movie3}</p>
        </div>
        </div>
  )
}

export default Card
