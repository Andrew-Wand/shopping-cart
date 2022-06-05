import  React  from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';


function Header(props) {

    


    const cart = <FontAwesomeIcon icon= {faShoppingCart} />









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
                    
                    <Link to={'/cart'} className='nav-link'>
                        <li className="nav-button">
                            
                            {cart}
                            
                            <span className="cartCount">
                                {props.updateCart}
                            </span>


                        </li>
                    </Link>
                </nav>








            </div>
        </header>

    );
}

export default Header;