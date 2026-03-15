import { useState, useEffect } from "react";
import "./TodoList.css";

function TodoList() {
  // estado inicial carregado do localStorage
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  // estado controlado do campo de entrada
  const [input, setInput] = useState("");

  // persiste alterações no localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // adiciona nova tarefa
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

  // alterna estado concluído
  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  // remove tarefa
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="todo">
      {/* formulário de criação */}
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

      {/* lista de tarefas */}
      <ul className="todo-list">
        {tasks.map((task) => (
          <li className="todo-item" key={task.id}>
            {/* grupo checkbox + texto */}
            <div className="todo-left">
              {/* checkbox controlado */}
              <input
                type="checkbox"
                className="todo-checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
              />

              {/* texto da tarefa */}
              <span className={`todo-text ${task.done ? "completed" : ""}`}>
                {task.text}
              </span>
            </div>

            {/* remover tarefa */}
            <button className="todo-remove" onClick={() => deleteTask(task.id)}>
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
