import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { MainView } from './views/main-view'

function App() {

  return (
    <div id="App" className='bg-blue-100 w-full h-full'>
      {/* <div className={"w-screen h-screen bg-blue-200"}></div> */}
      <MainView />
    </div>
  )
}

export default App
