import React from "react";
import Task from "./Task";

function Taskboard(props) {
  return (
    <div className="taskboard">
      <h1 className="heading-center taskboard-heading">Tasks</h1>
      {props.displayedTasks ? (
        <ul className="taskboard-ul">
          {props.displayedTasks.map((task, index) => {
            return (
              <li key={index} className="taskboard-li">
                <Task
                  index={index}
                  task={task}
                  users={props.users}
                  moveTaskUp={props.moveTaskUp}
                  moveTaskDown={props.moveTaskDown}
                  deleteTask={props.deleteTask}
                  editTask={props.editTask}
                  currentUser={props.currentUser}
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
export default Taskboard;
