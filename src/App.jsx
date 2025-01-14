// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/functionalComp/Counter'
import TextShow from './components/functionalComp/TextShow'
import Input from './components/functionalComp/Input'
import ColorChange from './components/functionalComp/ColorChange'
import CounterClass from './components/classComp/CounterClass'
import TextShowClass from './components/classComp/TextShowClass'
import InputClass from './components/classComp/InputClass'
import ColorChangeClass from './components/classComp/ColorChangeClass'


function App() {

  return(
    <div>
    <h1>Функциональные компоненты</h1>
    <Counter/>
    <hr />
    <TextShow/>
    <hr />
    <Input/>
    <hr />
    <ColorChange/>
    <hr />
    <h1>Классовые компоненты</h1>
    <CounterClass/>
    <hr/>
    <TextShowClass/>
    <hr/>
    <InputClass/>
    <hr/>
    <ColorChangeClass/>
    </div>

  )
  
}

export default App
