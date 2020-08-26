import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from '.';

describe('Todo List', () => {
  let component;

  beforeEach(() => {
    jest.useFakeTimers();
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
    expect(getByText('Make this test pass')).toBeInTheDocument();
  });

  it('should remove task from list', async () => {
    const { getByText, getByTestId } = component;

    const todoInput = getByTestId('todoInput');
    const taskList = getByTestId('taskList');

    fireEvent.change(todoInput, { target: { value: 'Remove this task' } });
    fireEvent.click(getByText('Add task'));
    fireEvent.click(getByTestId('remove-item-0'));

    jest.setTimeout(() => {
      expect(taskList.children.length).toBe(0);
      expect(getByText('Remove this task')).not.toBeInTheDocument();
    }, [100]);
  });
});
