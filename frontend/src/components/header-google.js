import React from 'react';

const GoogleHeader = ({ handleLogin }) => {
  return (
    <nav className="navbar navbar-dark bg-dark justify-content-between">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          BLOG
        </a>
        <div className="cform-inline">
          <div className="google-btn" onClick={handleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with Google</b>
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default GoogleHeader;
