import React from 'react'

export default function Navbar({ color, error, onChange, onSubmit }) {
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
                        onChange={(e) => onChange(e.target.value)}
                    />
                </form>
            </div>
        </nav>
    );
}
