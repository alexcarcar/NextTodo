import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

test('renders TodoList component', () => {
    render(<TodoList />);
    const linkElement = screen.getByText(/todo list/i);
    expect(linkElement).toBeInTheDocument();
});