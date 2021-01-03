import React, { useState } from 'react'
import Values from 'values.js';

import { Navbar, Color } from './components';
import { getRandomHexColor } from './utils';
import './App.css';

function App() {
  const [color, setColor] = useState(getRandomHexColor());
  const [list, setList] = useState(new Values(color).all(10));

  return (
    <>
      <Navbar />
      <main className="colors">
        {list.map(c => <Color color={c} />)}
      </main>
    </>
  );
}

export default App;
