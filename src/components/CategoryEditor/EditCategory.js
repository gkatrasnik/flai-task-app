import React, { useState, useEffect } from "react";
import "../../App.scss";

function EditCategory(props) {
  const [visible, setVisible] = useState();
  const [name, setName] = useState();
  const [color, setColor] = useState();
  const [hex, setHex] = useState();

  const handleEditCategory = () => {
    if (!name) {
      return alert("please choose a name");
    }

    let newcolor = props.makeJSONColor(hex);

    let newCategory = {
      visible: visible,
      name: name,
      color: newcolor,
    };
    console.log("new cat. ", newCategory);
    props.editCategory(props.category, newCategory);
    props.toggleEditCategory();

    setName("");
  };

  useEffect(() => {
    setVisible(props.visible);
    setColor(props.color);
    setHex(props.hex);
    setName(props.name);
  }, [props]);

  return (
    <div className="addtask-div">
      <button className="close-button" onClick={props.toggleEditCategory}>
        X
      </button>
      <h2 className="heading-center addtask-heading">Edit Category</h2>

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
          value={hex}
          onChange={(e) => setHex(e.target.value)}
        />
        <br />
        <button onClick={handleEditCategory}>Update Category</button>
      </div>
    </div>
  );
}
export default EditCategory;
