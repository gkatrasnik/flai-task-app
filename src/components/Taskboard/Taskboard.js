import React from "react";
import Task from "./Task";

function Taskboard(props) {
  return (
    <div className="taskboard">
      <h2 className="heading-center taskboard-heading">Taskboard</h2>
      <div className="heading-center taskboard-buttons">
        <button onClick={props.toggleSidebar} className="custom-button">
          Filter tasks
        </button>
        <button onClick={props.toggleAddTask} className="custom-button">
          Add Task
        </button>
      </div>
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
