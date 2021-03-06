import React, { useEffect, useState } from "react";
import "../../App.scss";
import EditTask from "./EditTask";
import Markdown from "marked-react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

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

    if (props.index === 0) {
      setTaskExpanded(true);
    }
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
      <div className="task-card box-shadow" onClick={handleTaskClick}>
        <div className="task-card-header">
          <h4 className="task-title">{props.task.topic} </h4>
          <p className="for-text">
            For: {assignee.name} {assignee.surname}
          </p>
          <div className="updown custom-button">
            <div
              onClick={(e) => {
                e.stopPropagation();
                props.moveTaskUp(props.task);
              }}
            >
              <FaAngleUp />
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation();
                props.moveTaskDown(props.task);
              }}
            >
              <FaAngleDown />
            </div>
          </div>
        </div>
        {taskExpanded && (
          <div>
            <div className="task-details">
              <p>
                Task by: {reporter.name} {reporter.surname}
              </p>
              <div className="task-buttons">
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
            <label>
              <b>Description:</b>
            </label>
            <div className="task-description-text">
              <Markdown>{props.task.description}</Markdown>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Task;
