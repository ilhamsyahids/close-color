import React, { useState } from 'react'
import Values from 'values.js';

import { Navbar, Color } from './components';
import { getRandomHexColor } from './utils';
import './App.css';

function App() {
  const [color, setColor] = useState(() => {
    let c;
    try {
      new Values(window.location.hash.slice(1)).all(10);
      c = window.location.hash.slice(1);
    } catch (e) {
      c = getRandomHexColor()
    } finally {
      return c;
    }
  });
  const [weigth, setWeigth] = useState(10);
  const [list, setList] = useState(new Values(color).all(weigth));
  const [error, setError] = useState(false);

  const submitColor = (e) => {
    e.preventDefault();
    const c = e.target.color.value;
    const w = +e.target.weigth.value;
    onChangeColor(c, w)
  }

  const onChangeColor = (c, w = weigth) => {
    try {
      const colors = new Values(c).all(w);
      setColor(c);
      setWeigth(w)
      setList(colors);
      setError(false)
      window.location.hash = `#${c}`.replace(/\s/g, '')
    } catch (e) {
      setError(true)
      return
    }
  }

  const onChangeWeigth = (w) => {
    onChangeColor(color, +w)
  }

  return (
    <>
      <Navbar
        color={color}
        weigth={weigth}
        error={error}
        onChangeColor={onChangeColor}
        onSubmit={submitColor}
        onChangeWeigth={onChangeWeigth}
      />
      <main className="colors">
        {list.map((c, idx) => <Color key={idx} color={c} />)}
      </main>
    </>
  );
}

export default App;
