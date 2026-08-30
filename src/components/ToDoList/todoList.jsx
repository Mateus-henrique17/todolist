import { useState, useEffect } from "react";
import { ProgressBar } from "../ProgressBar/ProgressBar.jsx";
import { TodoForm } from "../ToDoForm/TodoForm.jsx";
import { TodoItem } from "../ToDoItem/TodoItem.jsx";
import "./TodoList.css";

export const TodoList = () => {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.done).length;

  const handleAddTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      done: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="todo">
      <ProgressBar total={totalTasks} completed={completedTasks} />
      
      <TodoForm onAddTask={handleAddTask} />

      <ul className="todo-list">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
};
