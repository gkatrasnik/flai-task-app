import React, { useState, useEffect } from "react";
import "../../App.scss";

function AddCategory(props) {
  const [visible, setVisible] = useState(true);
  const [name, setName] = useState("");
  const [color, setColor] = useState();

  const handleAddCategory = () => {
    if (!name) {
      return alert("please choose a name");
    }

    let newCategory = {
      visible: visible,
      name: name,
      color: color,
    };

    props.addNewCategory(newCategory);

    props.toggleAddCategory();
    setName("");
  };

  const handleColorSelect = (color) => {
    setColor(color);
  };

  return (
    <div className="addtask-div">
      <button className="close-button" onClick={props.toggleAddCategory}>
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
          onChange={(e) => setVisible(e.currentTarget.checked)}
        />
        <br />
        <label for="color">Color:</label>
        <input
          type="color"
          id="color"
          name="color"
          value={color}
          onInput={(e) => setColor(e.target.value)}
        />
        <br />
        <button onClick={handleAddCategory}>Add Category</button>
      </div>
    </div>
  );
}
export default AddCategory;
