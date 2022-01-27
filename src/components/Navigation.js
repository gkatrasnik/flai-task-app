import React from "react";
import "../App.scss";
import UserDropdown from "./UserDropdown";

function Navigation(props) {
  const handleUserSelect = (user) => {
    props.handleCurrentUser(user);
  };

  return (
    <div className="navigation-div">
      <button onClick={props.toggleSidebar} className="custom-button">
        Filter tasks
      </button>
      <button onClick={props.toggleAddTask} className="custom-button">
        Add Task
      </button>
      <div>
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
