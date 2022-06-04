import { React } from "react";
import { Link } from "react-router-dom";


function Header(props) {














    return (

        <header>
            <div className="headerContainer">
                
                
                <div className="logo-container">
                    <Link to='/'>
                        LOGO
                    </Link>
                </div>

                <nav className="nav-container">
                    <Link to={'/'} className='nav-link'>
                        <li className="nav-button">Home</li>
                    </Link>
                    
                    <Link to={'/shop'} className='nav-link'>
                        <li className="nav-button">Shop</li>
                    </Link>
                </nav>








            </div>
        </header>

    );
}

export default Header;