import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src="logo192.png" alt="logo"/>
                </Link>
            </div>

            <div className="navbar-btns">
                <Link to="add-item">
                    <button>Lisa uus ese</button>
                </Link>
                <Link to="/add-category">
                    <button>Kategooriad</button>
                </Link>
                <Link to="/admin">
                    <button>Admini vaatesse</button>
                </Link>
            </div>

            <div className="cart">
                <Link to="cart">
                    <img src="cart.svg" alt=""/>
                </Link>
            </div>

        </div>
    );
}

// alumine tehke ise

export default Navbar;