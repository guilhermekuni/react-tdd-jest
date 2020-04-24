import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from '.';

describe('Todo List', () => {
  let component;

  beforeEach(() => {
    component = render(<TodoList />);
  });

  it('should render', () => {
    const { getByText, getByTestId } = component;

    expect(getByText('Todo List')).toBeInTheDocument();
    expect(getByTestId('todoInput')).toBeInTheDocument();
    expect(getByText('Add task')).toBeInTheDocument();
  });

  it('should render empty list', () => {
    const { getByText, getByTestId } = component;

    expect(getByTestId('taskList')).toBeInTheDocument();
    expect(getByText('There is no task to do!')).toBeInTheDocument();
  });

  it('should add task to list', () => {
    const { getByText, getByTestId } = component;

    const todoInput = getByTestId('todoInput'); 
    const taskList = getByTestId('taskList'); 

    fireEvent.change(todoInput, { target: { value: 'Make this test pass' } });
    fireEvent.click(getByText('Add task'));

    expect(taskList.children.length).toBe(1);
    expect(todoInput).toHaveTextContent('');
  });
});