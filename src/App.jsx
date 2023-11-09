import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DogArray from './components/DogArray'
import ObjectExample from './components/ObjectExample'
import UseRefExample from './components/UseRefExample'
import ArrayExample from './components/ArrayExample'

// Add these back in to see what they do
// <UseRefExample />
// <DogArray />
// <ObjectExample />

function App() {


  return (
    <>
      <h1>This is App</h1>
      <ArrayExample />

    </>

  )
}

export default App
