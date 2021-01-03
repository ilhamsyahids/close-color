import React, { useState } from 'react'
import Values from 'values.js';

import { Navbar, Color } from './components';
import { getRandomHexColor } from './utils';
import './App.css';

function App() {
  const [color, setColor] = useState(() => {
    let c;
    try {
      new Values(window.location.hash).all(10);
      c = window.location.hash;
    } catch (e) {
      c = getRandomHexColor()
    } finally {
      return c;
    }
  });
  const [list, setList] = useState(new Values(color).all(10));
  const [error, setError] = useState(false);

  const submitColor = (e) => {
    e.preventDefault();
    const c = e.target.color.value;
    onChangeColor(c)
  }

  const onChangeColor = (c) => {
    try {
      const colors = new Values(c).all(10);
      setColor(c);
      setList(colors);
      setError(false)
      window.location.hash = c
    } catch (e) {
      setError(true)
      return
    }
  }

  return (
    <>
      <Navbar color={color} error={error} onChange={onChangeColor} onSubmit={submitColor} />
      <main className="colors">
        {list.map(c => <Color key={c.hex} color={c} />)}
      </main>
    </>
  );
}

export default App;
