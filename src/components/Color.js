import React from 'react';

import { rgbToHsl } from '../utils';

export default function Color({ color }) {
    const alpha = (color.alpha !== 1 ? `, ${color.alpha.toFixed(2)}` : '')
    const brightness = color.getBrightness() > 55 ? 'light' : 'dark';
    const hex = `#${color.hex}`
    const weight = color.weight
    const rgb = `rgb(${color.rgb.join(', ') + alpha})`
    const hsl = `hsl(${rgbToHsl(color.rgb).join(', ') + alpha})`

    return (
        <article className={`color ${brightness}`} style={{ backgroundColor: hex }}>
            <p className="color-percent">{weight}%</p>
            <p className="color-value hex">{hex}</p>
            <p className="color-value">{rgb}</p>
            <p className="color-value">{hsl}</p>
        </article>
    );
}
