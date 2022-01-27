import React from "react";
import "../App.scss";
import SidebarUser from "./SidebarUser";

function Sidebar(props) {
  return (
    <div
      className={`sidebar-div ${
        props.showSidebar ? "sidebar-shown" : "sidebar-hidden"
      }`}
    >
      <h2>Tasks for:</h2>
      {props.users ? (
        <ul className="sidebar-ul">
          {props.users.map((user, index) => {
            return (
              <li key={index} className="sidebar-li">
                <SidebarUser
                  user={user}
                  updateShowTasksList={props.updateShowTasksList}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <h2 className="heading-center">No tasks...</h2>
      )}
    </div>
  );
}
export default Sidebar;
