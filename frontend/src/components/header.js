import React from 'react';

const Header = ({ handleLogin }) => {
  return (
    <nav className="navbar navbar-dark bg-dark justify-content-between">
      <div class="container-fluid">
        <a className="navbar-brand" href="#">
          BLOG
        </a>
        <div className="cform-inline">
          <button className="fb connect" onClick={handleLogin}>
            Authenticate with Facebook
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
