import React from 'react';
import { Todo } from '../types/todo';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <ul style={{ padding: 0, listStyle: 'none' }}>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '8px 0',
              borderBottom: '1px solid #ddd',
            }}
          >
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                flex: 1,
                cursor: 'pointer',
              }}
              onClick={() => onToggle(todo.id)}
            >
              {todo.text}
            </span>
            <button
              onClick={() => onRemove(todo.id)}
              style={{
                marginLeft: '16px',
                padding: '4px 8px',
                backgroundColor: '#e00',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;