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
  const [shownAssigneeTasksList, setShownAssigneeTasksList] = useState([]);

  const toggleSidebar = () => {
    return setShowSidebar(!showSidebar);
  };

  const updateShowTasksList = (assigneeId) => {
    let showUsersTasksList = [...shownAssigneeTasksList];
    let newUsersTasksList = [];
    if (showUsersTasksList.includes(assigneeId)) {
      newUsersTasksList = showUsersTasksList.filter(
        (assignee) => assignee !== assigneeId
      );
    } else {
      newUsersTasksList = showUsersTasksList;
      newUsersTasksList.push(assigneeId);
    }
    setShownAssigneeTasksList(newUsersTasksList);
  };

  const populateShowTasksList = () => {
    let newShowTasksList = [];
    usersdata.forEach((user) => newShowTasksList.push(user.userid));

    setShownAssigneeTasksList(newShowTasksList);
  };

  useEffect(() => {
    setUsers(usersdata);
    setTasks(tasksdata);
    populateShowTasksList();
    // random uuid console.log(uuid());
  }, []);

  return (
    <div>
      <Navigation toggleSidebar={toggleSidebar} />
      <Sidebar
        showSidebar={showSidebar}
        updateShowTasksList={updateShowTasksList}
        users={users}
      />
      <Taskboard
        tasks={tasks}
        shownAssigneeTasksList={shownAssigneeTasksList}
        users={users}
      />
    </div>
  );
}

export default App;
