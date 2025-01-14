import React from "react";

const AppNavBar = (props) => (
   <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
         <div className="navbar-start">
            <a className="navbar-item">{props.title}</a>
            <a className="navbar-item">Documentation</a>
            <div className="navbar-item has-dropdown is-hoverable">
               <a className="navbar-link">More</a>
               <div className="navbar-dropdown">
                  <a className="navbar-item">About</a>
                  <a className="navbar-item">Jobs</a>
                  <a className="navbar-item">Contact</a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item">Report an issue</a>
               </div>
            </div>
         </div>
         <div className="navbar-end">
            <div className="navbar-item">
               <div className="buttons">
                  <a className="button is-primary">
                     <strong>Sign up</strong>
                  </a>
                  <a className="button is-light">Log in</a>
               </div>
            </div>
         </div>
      </div>
   </nav>
);

export default AppNavBar;