import { useState } from 'react';
import TodoList from '../components/TodoList';
import { Todo } from '../types/todo';

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    const todo: Todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, todo]);
    setNewTodo('');
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
      <div className="todo-app-container">
        <h1 className="todo-header">Todo List</h1>
        <div className="todo-input-group">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo"
            className="todo-input"
          />
          <button onClick={addTodo} className="todo-add-button">
            Add Todo
          </button>
        </div>
        <TodoList todos={todos} onToggle={toggleTodo} onRemove={removeTodo} />
      </div>
    );
};

export default Home;