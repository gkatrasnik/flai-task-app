import React from "react";
import "../App.scss";
import UserDropdown from "./UserDropdown";
import { Link } from "react-router-dom";

function Navigation(props) {
  const handleUserSelect = (user) => {
    props.handleCurrentUser(user);
  };

  return (
    <div className="navigation-div">
      <div className="nav-control">
        <button className="custom-button">
          <Link to="/">Task Manager</Link>
        </button>
        <button className="custom-button">
          <Link to="/category"> Categoriy Definition Editor</Link>
        </button>
        <button className="custom-button">
          <Link to="/viewer">Cloud Point Viewer</Link>
        </button>
        Current user:{" "}
        <UserDropdown
          users={props.users}
          handleUserSelect={handleUserSelect}
          default={props.currentUser}
        />
      </div>
    </div>
  );
}
export default Navigation;
