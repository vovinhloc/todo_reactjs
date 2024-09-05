import React from "react";

export default function TodoItem({name}) {
  return (
    <div className="todo-item">
      <p className="todo-item-text">{name}</p>
    </div>
  );
}
