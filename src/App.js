import { useState, useEffect } from "react";
import "./App.scss";
import { v1 as uuid } from "uuid";
import usersdata from "./data/users";
import tasksdata from "./data/tasks";
import Taskboard from "./components/taskboard";

function App() {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setAddTask] = useState(false);

  useEffect(() => {
    setUsers(usersdata);
    setTasks(tasksdata);
  }, []);

  return (
    <div>
      <Taskboard tasks={tasks} />
    </div>
  );
}

export default App;
