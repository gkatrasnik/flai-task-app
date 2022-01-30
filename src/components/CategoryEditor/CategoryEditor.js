import React, { useState, useEffect } from "react";
import AddCategory from "./AddCategory";
import Category from "./Category";
import data from "../../data/categories";

function CategoryEditor(props) {
  const [categories, setCategories] = useState();
  const [showAddCategory, setShowAddCategory] = useState(false);

  const toggleAddCategory = () => {
    return setShowAddCategory(!showAddCategory);
  };

  const addNewCategory = (category) => {
    let categoriesArr = [...categories];
    categoriesArr.unshift(category);
    setCategories(categoriesArr);
  };

  const editCategory = (oldcategory, newcategory) => {
    let categoriesArr = [...categories];
    let categoryIndex = categoriesArr.indexOf(oldcategory);
    categoriesArr[categoryIndex] = newcategory;
    setCategories(categoriesArr);
  };

  const deleteCategory = (category) => {
    let categoriesArr = [...categories];
    let categoryIndex = categoriesArr.indexOf(category);

    categoriesArr.splice(categoryIndex, 1);
    setCategories(categoriesArr);
  };

  const getCategoriesData = () => {
    const result = Object.values(data);

    let rawcategories = localStorage.getItem("categories");
    let parsedData = result;
    if (rawcategories == null) {
      setCategories(result);
      console.log("from file", result);
    } else {
      parsedData = JSON.parse(rawcategories);
      setCategories(parsedData); //data from tasks.js file
      console.log("from LS", parsedData);
    }
  };

  const setCategoriesData = () => {
    if (categories !== undefined)
      localStorage.setItem("categories", JSON.stringify(categories));
  };

  useEffect(() => {
    setCategoriesData();
  }, [categories]);

  useEffect(() => {
    getCategoriesData();
  }, []);

  return (
    <>
      {showAddCategory && (
        <AddCategory
          addNewCategory={addNewCategory}
          toggleAddCategory={toggleAddCategory}
        />
      )}
      <div className="taskboard">
        <h1 className="heading-center taskboard-heading">Categories</h1>
        <div className="heading-center taskboard-buttons">
          <button onClick={toggleAddCategory} className="custom-button">
            Add Category
          </button>
        </div>
        {categories ? (
          <ul className="taskboard-ul">
            {categories.map((category, index) => {
              return (
                <li key={index} className="taskboard-li">
                  <Category
                    index={index}
                    category={category}
                    deleteCategory={deleteCategory}
                    editCategory={editCategory}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <h2 className="heading-center">No Categories...</h2>
        )}
      </div>
    </>
  );
}
export default CategoryEditor;
