import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Filterpanel.css";
import CategoryList from "./CategoryList";
const FILTER_ITEMS = [
  { id: "all", label: "All", iconPath: "./public/inbox.png" },
  { id: "importance", label: "Importance", iconPath: "./public/flag.png" },
  { id: "completed", label: "Completed", iconPath: "./public/check.png" },
  { id: "deleted", label: "Deleted", iconPath: "./public/delete.png" },
];
const FilterPanel = ({
  selectedFilterId,
  setSelectedFilterId,
  todoList,
  searchText,
  setSearchText,
}) => {
  const countByFilterType = useMemo(
    () =>
      todoList.reduce(
        (acc, todo) => {
          if (todo.isImportance) acc.importance++;
          if (todo.isCompleted) acc.completed++;
          if (todo.isDeleted) acc.deleted++;

          return acc;
        },
        { all: todoList.length, importance: 0, completed: 0, deleted: 0 }
      ),
    [todoList]
  );
  return (
    <div className="filter-panel">
      <input type="text" className="search-text" placeholder="search" value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
      <div className="filter-container">
        {FILTER_ITEMS.map((item) => {
          return (
            <div
              key={item.id}
              className={
                item.id === selectedFilterId
                  ? "filter-item active"
                  : "filter-item"
              }
              onClick={() => setSelectedFilterId(item.id)}
            >
              <div className="filter-name">
                <img src={item.iconPath} alt="all" />
                <p>{item.label}</p>
              </div>
              <p>{countByFilterType[item.id]}</p>
            </div>
          );
        })}
        {/* <div className="filter-item active">
          <div className="filter-name">
            <img src="./public/inbox.png" alt="all" />
            <p>All</p>
          </div>
          <p>22</p>
        </div>
        <div className="filter-item">
          <div className="filter-name">
            <img src="./public/flag.png" alt="all" />
            <p>All</p>
          </div>
          <p>22</p>
        </div>
        <div className="filter-item">
          <div className="filter-name">
            <img src="./public/check.png" alt="all" />
            <p>All</p>
          </div>
          <p>22</p>
        </div>
        <div className="filter-item">
          <div className="filter-name">
            <img src="./public/delete.png" alt="all" />
            <p>All</p>
          </div>
          <p>22</p>
        </div> */}
      </div>
      <CategoryList todoList={todoList}/>
    </div>
  );
};
FilterPanel.propTypes = {
  selectedFilterId: PropTypes.string,
  setSelectedFilterId: PropTypes.func,
  todoList: PropTypes.array,

  searchText: PropTypes.string,
  setSearchText: PropTypes.func,
};
export default FilterPanel;
