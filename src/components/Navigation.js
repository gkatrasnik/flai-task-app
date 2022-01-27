import React, { useContext, useState } from "react";
import "../App.scss";

function Navigation(props) {
  return (
    <div className="navigation-div">
      <button onClick={props.toggleSidebar} className="custom-button">
        Filter tasks
      </button>

      <button onClick={props.addTask} className="custom-button">
        Add Task
      </button>
    </div>
  );
}
export default Navigation;
