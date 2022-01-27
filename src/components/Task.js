import React, { useEffect, useState } from "react";
import "../App.scss";

function Task(props) {
  const [assignee, setAssignee] = useState("");
  const [reporter, setReporter] = useState("");

  const [taskExpanded, setTaskExpanded] = useState(false);

  const handleTaskClick = () => {
    setTaskExpanded(!taskExpanded);
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
    <div className="task-card" onClick={handleTaskClick}>
      <div className="task-card-header">
        <h3>{props.task.topic}</h3>
        <p>
          For: {assignee.name} {assignee.surname}
        </p>
        <div className="updown">
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
      </div>
      {taskExpanded && (
        <div>
          <p className="task-details-text">
            Task by: {reporter.name} {reporter.surname}
          </p>

          <p className="task-details-text">{props.task.description}</p>
        </div>
      )}
    </div>
  );
}
export default Task;
