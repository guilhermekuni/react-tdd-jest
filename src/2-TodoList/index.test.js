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
  });
});