import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-title">
                    <label htmlFor="color"><h3>Color</h3></label>
                </div>
                <form>
                    <input
                        id="color"
                        name="color"
                        type='text'
                        placeholder='#fff135'
                    />
                </form>
            </div>
        </nav>
    );
}
