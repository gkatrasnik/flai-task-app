import React, { useState } from "react";
import "../../App.scss";

import UserDropdown from "../UserDropdown";

function EditTask(props) {
  const [assigneeid, setAssigneeid] = useState(props.assignee.userid); // just default value
  const [topic, setTopic] = useState(props.task.topic);
  const [description, setDescription] = useState(props.task.description);

  const handleEditTask = () => {
    if (!topic || !description) {
      return alert("please fill in all boxes");
    }

    let newTask = {
      taskid: props.task.taskid,
      reporterid: props.currentUser,
      assigneeid: assigneeid,
      topic: topic,
      description: description,
    };

    setTopic("");
    setDescription("");
    props.toggleEditTask();
    props.editTask(props.task, newTask);
  };

  const handleUserSelect = (user) => {
    setAssigneeid(user);
  };

  return (
    <div className="edittask-div">
      <button className="close-button" onClick={props.toggleEditTask}>
        X
      </button>
      <h2 className="heading-center addtask-heading">Edit Task</h2>

      <div className="addtask-form">
        <label for="assignee">Task for:</label>
        <UserDropdown
          users={props.users}
          handleUserSelect={handleUserSelect}
          default={assigneeid}
        />

        <label for="topic">Topic:</label>
        <input
          type="text"
          id="topic"
          name="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <label for="description">Description:</label>
        <textarea
          type="text"
          id="description"
          name="description"
          rows="5"
          cols="50"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button onClick={handleEditTask}>Update Task</button>
      </div>
    </div>
  );
}
export default EditTask;
