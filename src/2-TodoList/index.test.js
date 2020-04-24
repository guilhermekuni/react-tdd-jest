import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from '.';

describe('Todo List', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<TodoList />);
  });

  it('should render', () => {
    const { getByText, getByTestId } = wrapper;

    expect(getByText('Todo List')).toBeInTheDocument();
    expect(getByTestId('todoInput')).toBeInTheDocument();
    expect(getByText('Add task')).toBeInTheDocument();
  });

  it('should render empty list', () => {
    const { getByText, getByTestId } = wrapper;

    expect(getByTestId('taskList')).toBeInTheDocument();
    expect(getByText('There is no task to do!')).toBeInTheDocument();
  });
});