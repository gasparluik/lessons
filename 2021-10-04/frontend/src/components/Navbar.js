import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return(
    <div className="navbar">
        <Link to="/">
            <img className="logo" src="webshio.png" alt=""/>
        </Link>

        <div className="navbar ul">
            <div className="navbar.ul.li">
                <ul>
                    <Link to="add-item">
                        <button>Lisa uus ese</button>
                    </Link>
                    <Link to="/">
                        <button>Button1</button>
                    </Link>
                    <Link to="/">
                        <button>Button2</button>
                    </Link>
                </ul>
            </div>
        </div>
        <Link to="cart">
            <img className="cart" src="cart.svg" alt=""/>
        </Link>
    </div>

  );
}

// alumine tehke ise

export default Navbar;