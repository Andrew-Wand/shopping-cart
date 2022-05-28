import { React } from "react";
import { Link } from "react-router-dom";


function Header(props) {














    return (

        <header>
            <div className="headerContainer">
                <div className="logo-container">
                    <Link to='/'>
                        Hey!
                    </Link>
                </div>
            </div>
        </header>

    );
}

export default Header;