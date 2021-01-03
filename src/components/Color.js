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
    const hex = `#${color.hex}`
    const weight = color.weight
    const rgb = `rgb(${color.rgb.join(', ') + alpha})`
    const hsl = `hsl(${rgbToHsl(color.rgb).join(', ') + alpha})`

    const copyValue = (str) => {
        setCopied([true, str])
        navigator.clipboard.writeText(str);
    }

    return (
        <article className={`color ${brightness}`} style={{ backgroundColor: hex }}>
            <p className="color-percent">{weight}%</p>
            <p
                className="color-value hex"
                onClick={() => copyValue(hex)}>
                {hex}
                <i className="fa fa-copy"></i>
            </p>
            <p
                className="color-value"
                onClick={() => copyValue(rgb)}>
                {rgb}
                <i className="fa fa-copy"></i>
            </p>
            <p
                className="color-value"
                onClick={() => copyValue(hsl)}>
                {hsl}
                <i className="fa fa-copy"></i>
            </p>
            {copied[0] && <p className='alert'>{copied[1]} COPIED TO CLIPBOARD</p>}
        </article>
    );
}
