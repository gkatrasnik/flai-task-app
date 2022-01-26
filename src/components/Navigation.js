import React, { useContext, useState } from "react";
import "../App.scss";

function Navigation(props) {
  return (
    <div className="navigation-div">
      <button onClick={props.toggleSidebar}>O</button>
    </div>
  );
}
export default Navigation;
