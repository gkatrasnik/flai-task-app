import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import "../App.scss";

import UserDropdown from "./UserDropdown";

function AddTask(props) {
  const [assigneeid, setAssigneeid] = useState(props.currentUser); // just default value
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    if (!topic || !description) {
      return alert("please fill in all boxes");
    }

    let newTask = {
      taskid: uuid(),
      reporterid: props.currentUser,
      assigneeid: assigneeid,
      topic: topic,
      description: description,
    };

    props.addNewTask(newTask);
    setTopic("");
    setDescription("");
    props.toggleAddTask();
  };

  const handleUserSelect = (user) => {
    setAssigneeid(user);
  };

  return (
    <div className="addtask-div">
      <h2 className="heading-center addtask-heading">Add Task</h2>

      <div className="addtask-form">
        <label for="assignee">Task for:</label>
        <UserDropdown users={props.users} handleUserSelect={handleUserSelect} />

        <label for="topic">Topic:</label>
        <input
          type="text"
          id="topic"
          name="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <label for="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button onClick={handleAddTask}>Submit</button>
      </div>
    </div>
  );
}
export default AddTask;
