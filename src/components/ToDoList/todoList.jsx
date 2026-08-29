import { useState, useEffect } from "react";
import "./TodoList.css";

export const TodoList = () => {

  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });


  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(e) {
    e.preventDefault();

    if (!input.trim()) return;

    const newTask = {
      id: Date.now(),
      text: input,
      done: false,
    };

    setTasks([...tasks, newTask]);
    setInput("");
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="todo">
      <form className="todo-form" onSubmit={addTask}>
        <input
          className="todo-input"
          type="text"
          placeholder="Digite uma tarefa..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="todo-button">Adicionar</button>
      </form>

      <ul className="todo-list">
        {tasks.map((task) => (
          <li className="todo-item" key={task.id}>
            <div className="todo-left">
              <input
                type="checkbox"
                className="todo-checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
              />

              <span className={`todo-text ${task.done ? "completed" : ""}`}>
                {task.text}
              </span>
            </div>

            <button className="todo-remove" onClick={() => deleteTask(task.id)}>
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}