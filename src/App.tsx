import './App.css'
import Text from './Text'
import Card from './Card'
import Select from './Select'
import { useState } from 'react'

function App() {
  const [color, setColor] = useState('white')
  

  return (
    <>

      <Text/>

      <Card title='היי חח' img='https://images.pexels.com/photos/13203904/pexels-photo-13203904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' descreption='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nesciunt ducimus, nulla blanditiis rerum necessitatibus.' color= {color}/>

      <Select setColor={setColor}/>
    </>
  )
}

export default App
