import React from 'react';
import { Todo } from '../types/todo';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  return (
    <div className="todo-list-container">
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            <span
              className={`todo-text ${todo.completed ? 'completed' : ''}`}
              onClick={() => onToggle(todo.id)}
            >
              {todo.text}
            </span>
            <button className="remove-button" onClick={() => onRemove(todo.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;