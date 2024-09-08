import "./CategoryList.css";

import {  useMemo } from "react";
import PropTypes from "prop-types";
import { CATEGORY_ITEMS } from "../contants";
import {  useAppContext } from "../contexts/AppProvider";
const CategoryList = ({ todoList }) => {
  // const { categorySelectedId, setCategorySelectedId } = useContext(AppContext);
  const { categorySelectedId, setCategorySelectedId } = useAppContext();

  const categoryFilter = useMemo(
    () =>
      todoList.reduce(
        (acc, todo) => {
          return { ...acc, [todo.category]: acc[todo.category] + 1 };
        },
        { personal: 0, idea: 0, company: 0, travel: 0 }
      ),
    [todoList]
  );

  return (
    <div>
      {CATEGORY_ITEMS.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => setCategorySelectedId(item.id)}
            className={`categoryItem ${
              categorySelectedId === item.id && "active"
            }`}
          >
            <div className="categoryName">
              <p>{item.name}</p>
            </div>
            <div>{categoryFilter[item.id]}</div>
          </div>
        );
      })}
    </div>
  );
};
CategoryList.propTypes = {
  todoList: PropTypes.array,
};
export default CategoryList;
