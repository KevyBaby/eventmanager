import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py--0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <span className="text-dark">
                  <i className="fa fa-home"></i>Home
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/event/add" className="nav-link">
                <span className="text-dark">
                  <i className="fa fa-plus"></i>Add
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <span className="text-dark">
                  <i className="fa fa-question"></i>About
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My App',
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

//Raw styling
//We can create a style sheet for each component

export default Header;
