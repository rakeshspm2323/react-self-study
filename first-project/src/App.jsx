import React from 'react'
const App = () => {
  let handleEvent = () => {
     let btn = document.querySelector('button')
     btn.style.backgroundColor = 'deeppink';
     btn.style.color = 'black';
   }
  let removeEvent =() => {
    let btn = document.querySelector('button')
    btn.style.backgroundColor = 'black';
    btn.style.color = 'white';
  }
  return (
    <div className='flex justify-center items-center'>
      <p className='font-bold text-[black] text-center m-5'>My First code in React</p>
      <button className='font-bold text-[white] border-2  px-1.5 py-1.5 rounded-md border-gray-950  bg-black text-center mt-5' onClick={handleEvent} onDoubleClick={removeEvent}>Click me!</button>
      <button className='font-bold text-[white] border-2  px-1.5 py-1.5 rounded-md border-gray-950  bg-black text-center mt-5' onClick={handleEvent} onDoubleClick={removeEvent}>Click Here! </button>
    </div>
  )
}

export default App
