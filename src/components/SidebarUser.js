import React, { useState } from "react";
import "../App.scss";

function SidebarUser(props) {
  const [checked, setChecked] = useState(true);
  return (
    <div className="sidebaruser-div">
      <input
        type="checkbox"
        id={props.user.userid}
        name={props.user.userid}
        value={props.user.userid}
        onChange={(e) => props.updateShowTasksList(e.target.value)}
        defaultChecked={checked}
      />
      <label for={props.user.userid} className="sidebaruser-label">
        {props.user.name} {props.user.surname}
      </label>
    </div>
  );
}
export default SidebarUser;
