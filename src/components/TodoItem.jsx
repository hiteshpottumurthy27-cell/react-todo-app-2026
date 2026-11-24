function TodoItem({ todo, toggleTask, deleteTask }) {
  return (
    <div className="todo-item">

      <span
        className={todo.completed ? "completed" : ""}
      >
        {todo.text}
      </span>

      <div className="todo-actions">

        <button onClick={() => toggleTask(todo.id)}>
          {todo.completed ? "Undo" : "Complete"}
        </button>

        <button onClick={() => deleteTask(todo.id)}>
          Delete
        </button>

      </div>

    </div>
  );
}

export default TodoItem;