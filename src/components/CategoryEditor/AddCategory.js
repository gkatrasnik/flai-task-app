import React, { useState, useEffect } from "react";
import "../../App.scss";

function AddCategory(props) {
  const [visible, setVisible] = useState(true);
  const [name, setName] = useState("");
  const [color, setColor] = useState([]);

  const handleAddTask = () => {
    if (!name) {
      return alert("please choose a name");
    }

    let newCategory = {
      visible: true,
      name: name,
      color: color,
    };

    props.addNewCategory(newCategory);
    setName("");
    props.toggleAddCategory();
  };

  const handleColorSelect = (color) => {
    setColor(color);
  };

  useEffect(() => {
    console.log("name: ", name, "color: ", color, " visible: ", visible);
  });

  return (
    <div className="addtask-div">
      <button className="close-button" onClick={props.toggleAddTask}>
        X
      </button>
      <h2 className="heading-center addtask-heading">Add Category</h2>

      <div className="addtask-form">
        <label for="topic">Name:</label>
        <input
          type="text"
          id="topic"
          name="topic"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label for="description">Visible:</label>
        <input
          type="checkbox"
          id="visible"
          name="visible"
          checked={visible}
          onClick={(e) => setVisible(e.target.checked)}
        />
        <br />
        <label for="color">Color:</label>
        <input
          type="color"
          id="color"
          name="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <br />
        <button onClick={handleAddTask}>Add Category</button>
      </div>
    </div>
  );
}
export default AddCategory;
