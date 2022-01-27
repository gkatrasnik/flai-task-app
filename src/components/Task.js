import React, { useEffect, useState } from "react";
import "../App.scss";
import EditTask from "./EditTask";

function Task(props) {
  const [assignee, setAssignee] = useState("");
  const [reporter, setReporter] = useState("");
  const [showEditTask, setShowEditTask] = useState(false);
  const [taskExpanded, setTaskExpanded] = useState(false);

  const handleTaskClick = () => {
    setTaskExpanded(!taskExpanded);
  };

  const toggleEditTask = () => {
    setShowEditTask(!showEditTask);
  };

  useEffect(() => {
    let assignee = props.users.find(
      (user) => user.userid === props.task.assigneeid
    );
    let reporter = props.users.find(
      (user) => user.userid === props.task.reporterid
    );
    setAssignee(assignee);
    setReporter(reporter);
  }, [props]);

  return (
    <>
      {showEditTask && (
        <EditTask
          toggleEditTask={toggleEditTask}
          assignee={assignee}
          currentUser={props.currentUser}
          task={props.task}
          editTask={props.editTask}
          users={props.users}
        />
      )}
      <div className="task-card" onClick={handleTaskClick}>
        <div className="task-card-header">
          <h5 className="task-title">{props.task.topic} </h5>
          <p className="task-details-text">
            For: {assignee.name} {assignee.surname}
          </p>
          <div className="task-buttons">
            <div className="updown custom-button">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  props.moveTaskUp(props.task);
                }}
              >
                ↑
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  props.moveTaskDown(props.task);
                }}
              >
                ↓
              </button>
            </div>
            <div className="control-buttons">
              <button
                className="custom-button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleEditTask();
                }}
              >
                Edit
              </button>
              <button
                className="custom-button"
                onClick={(e) => {
                  e.stopPropagation();
                  props.deleteTask(props.task);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        {taskExpanded && (
          <div>
            <p className="task-details-text">
              Task by: {reporter.name} {reporter.surname}
            </p>
            <label className="task-details-text">Description:</label>
            <p className="task-details-text task-description-text">
              {props.task.description}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
export default Task;
