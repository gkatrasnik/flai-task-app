import React, { useContext, useState } from "react";
import "../App.scss";

function Sidebar(props) {
  return (
    <div
      className={`sidebar-div ${
        props.showSidebar ? "sidebar-shown" : "sidebar-hidden"
      }`}
    >
      blabla
    </div>
  );
}
export default Sidebar;
