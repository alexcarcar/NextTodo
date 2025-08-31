import React from 'react';
import { Todo } from '../types/todo';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => onToggle(todo.id)}
          >
            {todo.text}
          </span>
          <button onClick={() => onRemove(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;