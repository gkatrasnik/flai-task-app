import "./App.scss";
import { v1 as uuid } from "uuid";
import { useEffect } from "react";
import users from "./data/users";
import tasks from "./data/tasks";

function App() {
  useEffect(() => {
    console.log(tasks);
  }, []);

  return <div></div>;
}

export default App;
