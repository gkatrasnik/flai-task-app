import { useState, useEffect } from "react";
import "./App.scss";
import { v1 as uuid } from "uuid";
import usersdata from "./data/users";
import tasksdata from "./data/tasks";
import Taskboard from "./components/Taskboard";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import AddTask from "./components/AddTask";

function App() {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [showAddTask, setShowAddTask] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [shownAssigneeTasksList, setShownAssigneeTasksList] = useState([]); // displayed users
  const [displayedTasks, setDisplayedTasks] = useState([]);

  const toggleSidebar = () => {
    return setShowSidebar(!showSidebar);
  };

  const toggleAddTask = () => {
    return setShowAddTask(!showAddTask);
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

  //swap positions helper
  const swapPositions = (array, a, b) => {
    [array[a], array[b]] = [array[b], array[a]];
  };

  //move task up (index -> index -1)
  const moveTaskUp = (task) => {
    let masterTasksArr = [...tasks];
    let indexFrom = masterTasksArr.indexOf(task);
    if (indexFrom > 0) {
      swapPositions(masterTasksArr, indexFrom, indexFrom - 1);
    }
    setTasks(masterTasksArr);
  };

  //move task down (index -> index + 1)
  const moveTaskDown = (task) => {
    let masterTasksArr = [...tasks];
    let indexFrom = masterTasksArr.indexOf(task);
    if (indexFrom < masterTasksArr.length - 1) {
      swapPositions(masterTasksArr, indexFrom, indexFrom + 1);
    }
    setTasks(masterTasksArr);
  };

  //add new task to tasks array
  const addNewTask = (task) => {
    let masterTasksArr = [...tasks];
    masterTasksArr.unshift(task);
    setTasks(masterTasksArr);
  };

  // delete task *******************************************
  const deleteTask = (task) => {
    let masterTasksArr = [...tasks];
    let taskIndex = masterTasksArr.indexOf(task);

    masterTasksArr.splice(taskIndex, 1);
    setTasks(masterTasksArr);
  };

  const handleCurrentUser = (user) => {
    setCurrentUser(user);
  };

  // edit task**************************
  const editTask = (taskid) => {
    let masterTasksArr = [...tasks];

    setTasks(masterTasksArr);
  };

  //run on app load
  useEffect(() => {
    //loads data from files to state
    setUsers(usersdata);
    setTasks(tasksdata);

    //populates displayed users and displayed tasks

    populateShowUsersTasks();
    populateDisplayedTasks();
    handleCurrentUser(usersdata[0].userid);
  }, []);

  //monitor checked users to display tasks and filter tasks
  useEffect(() => {
    filterDisplayedTasks();
  }, [shownAssigneeTasksList, tasks]);

  return (
    <div>
      <Navigation
        toggleSidebar={toggleSidebar}
        toggleAddTask={toggleAddTask}
        handleCurrentUser={handleCurrentUser}
        currentUser={currentUser}
        users={users}
      />
      {showAddTask && (
        <AddTask
          addNewTask={addNewTask}
          users={users}
          currentUser={currentUser}
          toggleAddTask={toggleAddTask}
        />
      )}
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
        moveTaskUp={moveTaskUp}
        moveTaskDown={moveTaskDown}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
