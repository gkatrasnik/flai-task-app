import React, { useEffect, useState } from "react";
import "../../App.scss";

import EditCategory from "../CategoryEditor/EditCategory";

function Category(props) {
  const [visible, setVisible] = useState();
  const [name, setName] = useState();
  const [color, setColor] = useState();
  const [showEditCategory, setShowEditCategory] = useState(false);

  const toggleEditCategory = () => {
    setShowEditCategory(!showEditCategory);
  };

  useEffect(() => {
    setVisible(props.category.visible);
    setName(props.category.name);
    setColor(props.category.color);
  }, [props]);

  return (
    <>
      {showEditCategory && (
        <EditCategory
          toggleEditCategory={toggleEditCategory}
          editCategory={props.editCategory}
          category={props.category}
          name={name}
          visible={visible}
          color={color}
        />
      )}
      <div className="task-card box-shadow">
        <div>
          <div className="task-details">
            <p className="task-details-text">Category: {name}</p>
            <div className="task-buttons">
              <div className="control-buttons">
                <button
                  className="custom-button"
                  onClick={(e) => {
                    toggleEditCategory();
                  }}
                >
                  Edit
                </button>
                <button
                  className="custom-button"
                  onClick={(e) => {
                    props.deleteCategory(props.category);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          <label className="task-details-text">Color:</label>
          <input type="checkbox" checked={visible}></input>
          <div
            className="color-box"
            style={{ backgroundColor: props.category.color }}
          />
        </div>
      </div>
    </>
  );
}

export default Category;
