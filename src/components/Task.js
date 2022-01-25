import React, { useEffect, useState } from "react";
import "../App.scss";

function Task(props) {
  const [assignee, setAssignee] = useState("");
  const [reporter, setReporter] = useState("");

  const [taskOpened, setTaskOpened] = useState(false);

  const handleTaskClick = () => {
    setTaskOpened(!taskOpened);
  };

  useEffect(() => {
    let assignee = props.users.filter(
      (user) => user.userid === props.task.assigneeid
    );
    let reporter = props.users.filter(
      (user) => user.userid === props.task.reporterid
    );
    setAssignee(assignee[0]);
    setReporter(reporter[0]);
  }, []);

  return (
    <div className="task-card" onClick={handleTaskClick}>
      <div className="task-card-header">
        <h3>{props.task.topic}</h3>
        <p>
          For: {assignee.name} {assignee.surname}
        </p>
      </div>
      {taskOpened && (
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
