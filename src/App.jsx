import TodoItem from "./components/TodoItem";
import "./App.css";
import { useState, useRef } from "react";
function App() {
  const inputTodo = useRef("");
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Học toán", isImportance: false, isCompleted: false },
    { id: 2, name: "học vẽ", isImportance: true, isCompleted: false },
    { id: 3, name: "chơi game", isImportance: false, isCompleted: true },
    { id: 4, name: "chơi đàn", isImportance: false, isCompleted: false },
  ]);
  const handleIsCompleted = (id, value) => {
    // const i = todoList.findIndex((todo) => todo.id === id);
    
    // const newState=[...todoList];
    // newState[i].isCompleted=value;
    
    // setTodoList(newState);

    // setTodoList((todoList)=>{
    //   return todoList.map(todo=>todo.id===id?{...todo,isCompleted:value}:todo)
    // })
    // setTodoList((todoList)=>{
    //     const i=todoList.findIndex((todo)=>todo.id===id);
    //     const newState=[...todoList];
    //     if (i>=0){
          
    //       newState[i].isCompleted=value;
    //     }
    //   return newState;
    // })

  //   setTodoList((todoList)=>{
  //     const i=todoList.findIndex((todo)=>todo.id===id);
      
  //     if (i>=0){
        
  //       todoList[i].isCompleted=value;
  //     }
  //   return [...todoList];
  // })
    
  setTodoList((todoList) => {
    const i = todoList.findIndex((todo) => todo.id === id);
    const newState = [...todoList];
    if (i >= 0) {
      newState[i] = { ...newState[i], isCompleted: value };
    }
    return newState;
  })
  
  };
  const todos = todoList.map((todo, index) => {
    return (
      <TodoItem
        key={todo.id}
        id={todo.id}
        name={todo.name}
        isImportance={todo.isImportance}
        isCompleted={todo.isCompleted}
        handleOnChangeCheckBox={handleIsCompleted}
      />
    );
  });

  
  const handleAddNewTask = (e) => {
    if (e.key === "Enter") {
      const value = e.target.value;
      // todoList.push({id:crypto.randomUUID(),name:value})
      const newTodo = { id: crypto.randomUUID(), name: value , isCompleted:false,isImportance:false};
      setTodoList([...todoList, newTodo]);
      // console.log("enter ok:",todoList,inputTodo)
      console.log("inputTodo=", inputTodo.current.value);
      inputTodo.current.value = "";
    }
  };
  return (
    <>
      <h1>Todo App with React Js</h1>
      <div className="container">
        <input
          ref={inputTodo}
          type="text"
          name="add-new-task"
          placeholder="thêm todo"
          className="task-input"
          onKeyDown={handleAddNewTask}
        />
        <div>{todos}</div>
      </div>
    </>
  );
}

export default App;
