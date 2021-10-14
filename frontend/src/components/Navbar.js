import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div className="navbar">
            <Link to="/">
                <img className="logo-neuromancer" src="neuromancer.png" alt=""/>
            </Link>

            <div className="navbar-btn-wrapper">
                    <Link to="add-item">
                        <button className="navbar-btn">Lisa uus ese</button>
                    </Link>
                    <Link to="add-categories">
                        <button className="navbar-btn"> Category list</button>
                    </Link>
            </div>

            <Link to="cart">
                <img className="logo-cart" src="cart.svg" alt=""/>
            </Link>
        </div>
    );
}

//alumine tehke ise

export default Navbar;