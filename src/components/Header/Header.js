import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1><NavLink className="home" to="/">Home</NavLink></h1>
            <h1><NavLink to="/form" className="form" >Form</NavLink></h1>
            <nav>
            
                <div id="user">
                  
                </div>
                <div id="guest">
                 
                </div>
            </nav>
        </header>
    );
};

export default Header;