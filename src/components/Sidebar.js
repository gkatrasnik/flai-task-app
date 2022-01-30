import React from "react";
import "../App.scss";
import SidebarUser from "./SidebarUser";
import { FaTimes } from "react-icons/fa";

function Sidebar(props) {
  return (
    <div className={props.showSidebar ? "sidebar-div active" : "sidebar-div"}>
      <div className="close-button" onClick={props.toggleSidebar}>
        <FaTimes style={{ color: "white" }} />
      </div>
      <h2 className="sidebar-header">Tasks for:</h2>
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
