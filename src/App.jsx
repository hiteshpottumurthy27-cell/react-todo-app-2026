import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Add new task
  const addTask = () => {
    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  // Mark task as completed or uncompleted
  const toggleTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">

      <h1>My TODO Application</h1>

      <TodoForm
        task={task}
        setTask={setTask}
        addTask={addTask}
      />

      <TodoList
        todos={todos}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />

    </div>
  );
}

export default App;