import React from 'react'

import { Navbar } from './components'
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main className="colors">
        <article className="color" style={{"background-color": "rgb(250, 255, 255)"}}>
          <p className="color-percent">100%</p>
          <p className="color-value">#ffffff</p>
        </article>
      </main>
    </>
  );
}

export default App;
