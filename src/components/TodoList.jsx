import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTask, deleteTask }) {
  return (
    <div className="todo-list">

      {todos.length === 0 ? (
        <p className="empty-message">No tasks yet. Add your first task!</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))
      )}

    </div>
  );
}

export default TodoList;