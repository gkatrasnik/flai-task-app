import React, { useEffect, useState } from "react";
import "../../App.scss";

import EditCategory from "../CategoryEditor/EditCategory";
const tinycolor = require("tinycolor2");

function Category(props) {
  const [visible, setVisible] = useState();
  const [name, setName] = useState();
  const [color, setColor] = useState();
  const [hex, setHex] = useState();
  const [showEditCategory, setShowEditCategory] = useState(false);

  const toggleEditCategory = () => {
    setShowEditCategory(!showEditCategory);
  };

  const makeHex = (JSONColor) => {
    if (JSONColor) {
      let raw = `{"r":"${JSONColor[0]}","g":"${JSONColor[1]}","b":"${JSONColor[2]}"}`;

      let json = JSON.parse(raw);
      let hex = tinycolor.fromRatio(json).setAlpha(JSONColor[3]).toHexString();
      return hex;
    }
  };

  const makeJSONColor = (hex) => {
    let color = tinycolor(hex);
    let rgb = color.toRgb(); //{ r: "100%", g: "0%", b: "0%", a: 1 }
    let values = Object.values(rgb);
    let json = [];
    for (let i = 0; i < 3; i++) {
      json.push(values[i] / 255);
    }
    json.push(values[3]);
    return json;
  };

  useEffect(() => {
    setHex(makeHex(props.category.color));
  }, []);

  useEffect(() => {
    setVisible(props.category.visible);
    setName(props.category.name);
    setColor(props.category.color);
    setHex(makeHex(props.category.color));
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
          hex={hex}
          color={color}
          makeJSONColor={makeJSONColor}
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
          <label className="task-details-text">Visible:</label>

          <input type="checkbox" checked={visible}></input>
          <label className="task-details-text">Color:</label>
          <input type="color" id="color" name="color" value={hex} disabled />
        </div>
      </div>
    </>
  );
}

export default Category;
