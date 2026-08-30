import "./TodoItem.css"

export const TodoItem = ({ task, onToggle, onDelete }) => {
  return (
    <li className="todo-item">
      <div className="todo-left">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
        />
        <span className={`todo-text ${task.done ? "completed" : ""}`}>
          {task.text}
        </span>
      </div>
      <button className="todo-remove" onClick={() => onDelete(task.id)}>
        ✕
      </button>
    </li>
  );
};
