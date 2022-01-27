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
  const [shownAssigneeTasksList, setShownAssigneeTasksList] = useState([]); // displayed users
  const [displayedTasks, setDisplayedTasks] = useState([]);

  const toggleSidebar = () => {
    return setShowSidebar(!showSidebar);
  };

  //updates list of users whose tasks are displayed in taskboard (if user on list -> remove user, if not on list -> add user)
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

  //on app load populates list of users whos tasks are displayed in taskboard (checked users in sidebar)
  const populateShowUsersTasks = () => {
    let newShowTasksList = [];
    usersdata.forEach((user) => newShowTasksList.push(user.userid));
    setShownAssigneeTasksList(newShowTasksList);
  };

  //on app load populates displayed tasks array
  const populateDisplayedTasks = () => {
    let newDisplayedTasksList = [];
    tasksdata.forEach((task) => newDisplayedTasksList.push(task));
    setDisplayedTasks(newDisplayedTasksList);
  };

  //filter which tasks to display and sets displayedTasks in state
  const filterDisplayedTasks = () => {
    let newDisplayedTasks = [];
    tasks.forEach((task) => {
      if (shownAssigneeTasksList.includes(task.assigneeid)) {
        newDisplayedTasks.push(task);
      }
    });
    setDisplayedTasks(newDisplayedTasks);
  };

  //run on app load
  useEffect(() => {
    //loads data from files to state
    setUsers(usersdata);
    setTasks(tasksdata);

    //populates displayed users and displayed tasks
    populateShowUsersTasks();
    populateDisplayedTasks();
  }, []);

  //monitor checked users to display tasks and filter tasks
  useEffect(() => {
    filterDisplayedTasks();
  }, [shownAssigneeTasksList]);

  return (
    <div>
      <Navigation toggleSidebar={toggleSidebar} />
      <Sidebar
        showSidebar={showSidebar}
        updateShowTasksList={updateShowTasksList}
        users={users}
      />
      <Taskboard
        users={users}
        displayedTasks={displayedTasks}
        filterDisplayedTasks={filterDisplayedTasks}
        shownAssigneeTasksList={shownAssigneeTasksList}
      />
    </div>
  );
}

export default App;
