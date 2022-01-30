import React, { useState } from "react";
import UserDropdown from "./UserDropdown";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "../App.scss";

const Navigation = (props) => {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);

  const handleClick = () => setClick(!click);

  const handleUserSelect = (user) => {
    props.handleCurrentUser(user);
  };
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <h1>flai</h1>
        </div>
        <div>
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option" onClick={closeMobileMenu}>
              <Link to="/">Task Manager</Link>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <Link to="/category"> Category Definition Editor</Link>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <Link to="/viewer">Point Cloud Viewer</Link>
            </li>
            <li className="option">
              Current User:
              <UserDropdown
                users={props.users}
                handleUserSelect={handleUserSelect}
                default={props.currentUser}
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <FaTimes style={{ color: "white" }} />
        ) : (
          <FaBars style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Navigation;
