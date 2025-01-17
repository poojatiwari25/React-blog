import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper orange">
                    <Link to="/" className="brand-logo">Blog</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/post">Post</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
