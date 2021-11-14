import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="component-1">
          <div className="component-1-item valign-text-middle">
            <Link to="/orderHistory">
              Order History
            </Link>
          </div>
          <div className="component-1-item valign-text-middle">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </div>
          <div className="component-1-item valign-text-middle"></div>
        </div>
      );
    } else {
      return (
        <div className="component-1">
          <div className="component-1-item valign-text-middle">
            <Link to="/signup">
              Signup
            </Link>
          </div>
          <div className="component-1-item valign-text-middle">
            <Link to="/login">
              Login
            </Link>
          </div>
          <div className="component-1-item valign-text-middle"></div>
        </div>
    
  );
}
}

  return (
    <header className="overlap-group1">
          
          <div className="get-moar-for-less valign-text-middle">
            Get Moar for Less
          </div>
          <div className="moarkett valign-text-middle">
            <Link to="/">
              MoarKett
            </Link>
          </div>
          <nav>
            {showNavigation()}
          </nav>

    </header>
  );
}

export default Nav;
