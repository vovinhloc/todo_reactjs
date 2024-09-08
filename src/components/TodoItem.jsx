import PropTypes from "prop-types"

export default function TodoItem({
  id,
  name,
  isImportance,
  isCompleted,
  handleOnChangeCheckBox,
  handleTodoItemClick
}) {
  
  return (
    <div className="todo-item" onClick={()=>handleTodoItemClick(id)}>
      <div style={{display:"flex",gap:"4px"}}>
        <input
          // ref={isChecked}
          type="checkbox"
          onClick={(e)=>e.stopPropagation()}
          checked={isCompleted}
          onChange={(e) => handleOnChangeCheckBox(id, e.target.checked)}
        />
        <p className="todo-item-text">{name}</p>
      </div>
      {isImportance && <p>Importance Window . 🐱‍🚀 ⭐🌟✨</p>}
    </div>
  );
}
TodoItem.propTypes={
  id:PropTypes.string,
  name:PropTypes.string,
  isImportance:PropTypes.bool,
  isCompleted:PropTypes.bool,
  handleOnChangeCheckBox:PropTypes.func,
  handleTodoItemClick:PropTypes.func
}
