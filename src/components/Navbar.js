import React from 'react'

export default function Navbar({ color, error, onChangeColor, onChangeWeigth, onSubmit }) {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-title">
                    <label htmlFor="color">
                        <h3>Color</h3>
                    </label>
                </div>
                <form onSubmit={onSubmit}>
                    <input
                        className={error ? 'error' : ''}
                        defaultValue={color}
                        id="color"
                        name="color"
                        type='text'
                        placeholder='#fff135'
                        onChange={(e) => onChangeColor(e.target.value)}
                    />
                    <input
                        id="weight"
                        className={error ? 'error' : ''}
                        name="weight"
                        defaultValue={10}
                        type="number"
                        min="1"
                        onChange={(e) => onChangeWeigth(e.target.value)}
                    />
                    %
                </form>
            </div>
        </nav>
    );
}
