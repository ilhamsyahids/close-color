import React from 'react'

import { Navbar, Color } from './components'
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main className="colors">
        <Color />
      </main>
    </>
  );
}

export default App;
