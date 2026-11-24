function TodoForm({ task, setTask, addTask }) {

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    addTask();
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Enter a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button type="submit">
        Add Task
      </button>

    </form>
  );
}

export default TodoForm;