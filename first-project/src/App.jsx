import React from 'react'
import './App.css'
import hrithik from './assets/HRX.jpeg'
import prabhas from './assets/Prabhas.jpg'
import rk from './assets/R kapoor.avif'
import Card from './components/props/props3/Card'
import Child from './components/props/props_children/Child'




const App = () => {

  let actor1={
    actorName:'Hrithik Roshan',
    about: `Hrithik Roshan is an Indian actor who works in Hindi cinema. He has portrayed a variety of characters and is known for his dancing skills.
     One of the highest-paid actors in India.`,
    movie1:'War',
    movie2:'Krrish',
    movie3:'Lakshya',
    image: hrithik
  }

  let actor2={
    actorName:'Prabhas',
    about: 'Uppalapati Venkata Suryanarayana Prabhas Raju, known mononymously as Prabhas, is an Indian actor who works predominantly in Telugu cinema.',
    movie1:'Bahubali',
    movie2:'Sallar',
    movie3:'Rebel',
    image: prabhas
  }

  let actor3={
    actorName:'',
    about: `Ranbir Kapoor is an Indian actor known for his work in Hindi-language films. 
    He is one of the highest-paid actors of Hindi cinema and has featured in Forbes India's Celebrity 100 list since 2012.`,
    movie1:'Animal',
    movie2:'Shamshera',
    movie3:'Brahmastra',
    image: rk
  }



  return (
    <div className='flex items-center justify-center gap-[2rem] pt-[5]'>
      <Card user={actor1}></Card>
      <Card user={actor2}></Card>
      <Card user={actor3}></Card>
      

      <Child user='props'>
            <h1>Learing React</h1>
            <h2>Learning Props children</h2>  
            <h3>Thankyou</h3>
      </Child>
    </div>
  )
}

export default App
