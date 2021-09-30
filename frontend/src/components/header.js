import React from 'react';

const Header = ({ handleLogin }) => {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand" href="#">
                BLOG
            </a>
            <div className="cform-inline">
                <button className="fb connect" onClick={handleLogin}>
                    Authenticate with Facebook
                </button>
            </div>
        </nav>
    );
};

export default Header;
