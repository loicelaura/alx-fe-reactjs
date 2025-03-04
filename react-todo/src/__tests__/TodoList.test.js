// src/__tests__/TodoList.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText('Add Todo'));
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    // Get all 'Delete' buttons
    const deleteButtons = screen.getAllByText('Delete');
    // Click the first one (for "Learn React")
    fireEvent.click(deleteButtons[0]);
    expect(screen.queryByText('Learn React')).toBeNull();
  });
});