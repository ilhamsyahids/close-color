import React, { useState, useEffect } from 'react';

import { rgbToHsl } from '../utils';

export default function Color({ color }) {
    const [copied, setCopied] = useState([false, ''])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCopied([false, '']);
        }, 2500);
        return () => clearTimeout(timeout);
    }, [copied]);

    const alpha = (color.alpha !== 1 ? `, ${color.alpha.toFixed(2)}` : '')
    const brightness = color.getBrightness() > 55 ? 'light' : 'dark';
    const weight = color.weight

    const values = [
        { type: 'hex', value: `#${color.hex}`},
        { type: 'rgb', value: `rgb(${color.rgb.join(', ') + alpha})`},
        { type: 'hsl', value: `hsl(${rgbToHsl(color.rgb).join(', ') + alpha})`},
    ]

    const copyValue = (str) => {
        setCopied([true, str])
        navigator.clipboard.writeText(str);
    }

    const colorValue = (color) => {
        const { type, value } = color;
        return <p
            className={`color-value ${type}`}
            onClick={() => copyValue(value)}>
            {value}
            <i className="far fa-copy"></i>
        </p>
    }

    return (
        <article className={`color ${brightness}`} style={{ backgroundColor: `#${color.hex}` }}>
            <p className="color-percent">{weight}%</p>
            {values.map(colorValue)}
            {copied[0] && <p className='alert'>{copied[1]} COPIED TO CLIPBOARD</p>}
        </article>
    );
}
