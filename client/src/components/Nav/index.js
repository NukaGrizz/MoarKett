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
<<<<<<< HEAD
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag">🛍️</span>
            Moarkett
        </Link>
      </h1>
=======
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
>>>>>>> fea43b24464d3a2e5b767bf02e1d95d43f84a117

    </header>
    // <header className="flex-row px-1">
    //   <h1 className="titlevalign-text-middleroboto-normal-white-40px">
    //     <Link to="/">
    //       MoarKett
    //     </Link>
    //   </h1>
    //   <div className="get-moar-for-lessvalign-text-middleroboto-normal-white-14px">
    //   Get Moar for Less</div>
    

    //   <nav>
    //     {showNavigation()}
    //   </nav>
  );
}

export default Nav;
