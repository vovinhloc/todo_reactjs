import  { useState } from "react";
import PropTypes from "prop-types";
import { CATEGORY_ITEMS } from "../contants";
import "./Sidebar.css";
const Sidebar = ({ todoItem, handleUpdateTodo, setShowSidebar }) => {
  const [name, setName] = useState(todoItem.name);
  const [isCompleted, setIsCompleted] = useState(todoItem.isCompleted);
  const [isImportance, setIsImportance] = useState(todoItem.isImportance);
  const [category,setCategory]=useState(todoItem.category)
  const handleSave = () => {
    console.log("handleSave");
    const newTodo = { ...todoItem, name, isCompleted, isImportance ,category};
    handleUpdateTodo(newTodo);
    setShowSidebar(false);
  };
  const handleCancel = () => {
    setShowSidebar(false);
  };
  return (
    <div className="sidebar">
      <form className="sb-form">
        <div className="sb-form-field">
          <label htmlFor="sb-name">Todo Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            id="sb-name"
            name="sb-name"
          />
        </div>
        <div className="sb-form-field">
          <label htmlFor="sb-important">is Important</label>
          <input
            type="checkbox"
            id="sb-important"
            name="sb-important"
            checked={isImportance}
            onChange={(e) => setIsImportance(e.target.checked)}
          />
        </div>
        <div className="sb-form-field">
          <label htmlFor="sb-completed">is Completed</label>
          <input
            type="checkbox"
            id="sb-completed"
            name="sb-completed"
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
          />
        </div>
        <div className="sb-form-field">
          <label htmlFor="sb-category">Category - {category}</label>
          <select
            
            id="sb-category"
            name="sb-category"
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
          >
            {CATEGORY_ITEMS.map((item)=>{
              return (<option key={item.id} value={item.id}>{item.name}</option>)
            })}
          </select>
        </div>
      </form>
      <div className="sb-footer">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};
Sidebar.propTypes={
  todoItem:PropTypes.object,
  handleUpdateTodo:PropTypes.func,
  setShowSidebar:PropTypes.object
}
export default Sidebar;
