// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import TextShow from './components/TextShow'
import Input from './components/Input'
import ColorChange from './components/ColorChange'


function App() {

  return(
    <div>
    <Counter/>
    <hr />
    <TextShow/>
    <hr />
    <Input/>
    <hr />
    <ColorChange/>
    <hr />
    </div>

  )
  
}

export default App
