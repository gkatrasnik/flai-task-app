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
        <Link to="/">Tasks</Link>
        <Link to="/category"> Categories</Link>
        <Link to="/viewer">Point Viewer</Link>
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
