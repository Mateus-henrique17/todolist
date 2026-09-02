import { useState } from "react";
import "./TodoForm.css";
export const TodoForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !category.trim()) return;

    onAddTask(title, category);
    setTitle("");
    setCategory("");
  };

  return (
    <form className="todo-form-field" onSubmit={handleSubmit}>
      <div className="todo-inputs">
        <input
          className="todo-input"
          type="text"
          placeholder="Digite uma tarefa..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className="todo-input"
          value={category}
          name="categories"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Casa">Casa</option>
          <option value="Pessoal">Pessoal</option>
        </select>
      </div>
      <button type="submit" className="todo-submit-button">
        Adicionar
      </button>
    </form>
  );
};
