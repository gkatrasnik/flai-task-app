import React from "react";
import "../App.scss";
import UserDropdown from "./UserDropdown";

function Navigation(props) {
  const handleUserSelect = (user) => {
    props.handleCurrentUser(user);
  };

  return (
    <div className="navigation-div">
      <div className="nav-control">
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
