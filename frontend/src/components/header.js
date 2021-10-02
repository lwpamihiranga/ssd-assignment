import React from 'react';

const Header = ({ handleLogin }) => {
  return (
    <nav className="navbar navbar-dark bg-dark justify-content-between">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          BLOG
        </a>
        <div className="cform-inline">
          <button className="fb connect" onClick={handleLogin}>
            Sign in with Facebook
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
