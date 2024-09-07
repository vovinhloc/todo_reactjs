import React, { useState, useEffect } from "react";
import "./Sidebar.css";
const Sidebar = ({ todoItem, handleUpdateTodo, setShowSidebar }) => {
  const [name, setName] = useState(todoItem.name);
  const [isCompleted, setIsCompleted] = useState(todoItem.isCompleted);
  const [isImportance, setIsImportance] = useState(todoItem.isImportance);
  const handleSave = () => {
    console.log("handleSave");
    const newTodo = { ...todoItem, name, isCompleted, isImportance };
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
      </form>
      <div className="sb-footer">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default Sidebar;
