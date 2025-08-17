import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Little League Scheduling Tool</h1>
        <div>
          <form>
            <label>
              Little League Name
              <input type="text" name='name' />
            </label>
            <div>
            <label>Number of Teams
              <input type="text" />
            </label>
            </div>
            <div>
            <label>Times of Day
              <input type="text" />
            </label>
            </div>
            <div>
            <label>Number of Fields Available
              <input type="text" />
            </label>
            
            </div>
          </form>
        </div>
    </>
  )
}

export default App
