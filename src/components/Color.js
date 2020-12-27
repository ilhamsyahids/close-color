import React from 'react';

export default function Color() {
    return (
        <article className="color" style={{ "background-color": "rgb(250, 255, 255)" }}>
            <p className="color-percent">100%</p>
            <p className="color-value">#ffffff</p>
            <p className="color-value">rgb(255, 255, 255)</p>
            <p className="color-value">hsl(0, 0%, 100%)</p>
        </article>
    );
}
