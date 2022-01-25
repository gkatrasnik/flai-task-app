import React, { useContext, useState } from "react";
import Task from "./Task";

function Taskboard(props) {
  return (
    <>
      <h1 className="heading-center">Tasks</h1>
      {props.tasks ? (
        <ul className="taskboard-ul">
          {props.tasks.map((task, index) => {
            return (
              <li key={index} className="taskboard-li">
                <Task task={task} users={props.users} />
              </li>
            );
          })}
        </ul>
      ) : (
        <h2 className="heading-center">No tasks...</h2>
      )}
    </>
  );
}
export default Taskboard;
