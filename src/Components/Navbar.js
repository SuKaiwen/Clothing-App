import React from 'react';

function Navbar(props) {
    return (
        <div className="nav-bar">
            <div className="nav-container">
                <h1 className="nav-text">TOPSHOP</h1>
                <div className="nav-side">
                    <h1 className="nav-text">CART</h1>
                    <h1 className="nav-text">PRODUCTS</h1>
                </div>
            </div>
        </div>
    );
}

export default Navbar;