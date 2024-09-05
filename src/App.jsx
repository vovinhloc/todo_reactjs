import TodoItem from "./components/TodoItem";
import "./App.css";
function App() {
  return (
    <>
      <h1>Todo App with React Js</h1>
      <div className="container">
        <input type="text" name="add-new-task" placeholder="thêm todo" className="task-input" />
        <div >
        <TodoItem name={"Học toán"}/>
        <TodoItem name={"Học Lý"}/>
        </div>
        
      </div>
    </>
  );
}

export default App;
