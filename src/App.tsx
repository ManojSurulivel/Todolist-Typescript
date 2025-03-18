import React, { useState } from "react";
import TodoList from "./ components/TodoList";
import AddTodo from "./ components/AddTodo";
import { Todo, AddTodo as AddTodoType } from "./types";
import "./App.css"; 

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo: AddTodoType = (text) => {
    const newTodo: Todo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;