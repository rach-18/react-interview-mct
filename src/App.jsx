import { useState } from 'react'
import Header from './components/Header'
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'

function App() {
  const [ind, setInd] = useState(0);

  const content = [{
    title: 'Home',
    content: 'Tab content for Home'
  },
  {
    title: 'About',
    content: 'Tab content for About'
  },
  {
    title: 'Contact',
    content: 'Tab content for Contact'
  }
]

  return (
    <div className='main'>
      <p className='title'>Custom Tabs</p>
      <div className="header">
          <p onClick={() => setInd(0)} style={{
            backgroundColor: ind === 0 ? 'black' : 'gray', color: ind === 0 ? 'white' : 'black'}} className="header-title">Home</p>
          <p onClick={() => setInd(1)} style={{backgroundColor: ind === 1 ? 'black' : 'gray', color: ind === 1 ? 'white' : 'black'}} className="header-title">About</p>
          <p onClick={() => setInd(2)} style={{backgroundColor: ind === 2 ? 'black' : 'gray', color: ind === 2 ? 'white' : 'black'}} className="header-title">Contact</p>
      </div>
      {
        content.map((cont, index) => {
          {
            return index === ind ? <p className='content'>{cont.content}</p> : <></>
          }
        })
      }
      {/* <div className="header">
          <p className="header-title">Home</p>
          <p className="header-title">About</p>
          <p className="header-title">Contact</p>
      </div> */}
      {/* <Header /> */}
    </div>
  )
}

export default App
