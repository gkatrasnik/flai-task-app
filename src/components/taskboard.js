import React, { useContext, useState } from "react";
import Task from "./task";

function Taskboard(props) {
  return (
    <>
      <h1 className="center mt-3">Tasks</h1>
      {props.tasks ? (
        <ul style={{ padding: 0 }}>
          {props.tasks.map((item, index) => {
            return (
              <li
                key={index}
                className="d-flex flex-direction-column justify-content-center"
              >
                <Task />
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="center">
          <h2 className="text-muted mt-3">No tasks...</h2>
        </div>
      )}
    </>
  );
}
export default Taskboard;
