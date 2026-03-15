import "./styles/App.css";
import TodoList from "./components/ToDoList/todoList.jsx";

function App() {
  return (
    <div className="app">

      <div className="app-container">
        <h1 className="app-title">Task Manager</h1>
        <TodoList />
      </div>

    </div>
  );
}

export default App;