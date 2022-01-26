import { useState, useEffect } from "react";
import "./App.scss";
import { v1 as uuid } from "uuid";
import usersdata from "./data/users";
import tasksdata from "./data/tasks";
import Taskboard from "./components/Taskboard";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";

function App() {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setAddTask] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    return setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    setUsers(usersdata);
    setTasks(tasksdata);
  }, []);

  return (
    <div>
      <Navigation toggleSidebar={toggleSidebar} />
      <Sidebar showSidebar={showSidebar} />
      <Taskboard tasks={tasks} users={users} />
    </div>
  );
}

export default App;
