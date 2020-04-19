import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './';

describe('Counter', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<Counter />);
  });

  it('should render', () => {
    const { getByText } = wrapper;

    expect(getByText('Counter:')).toBeInTheDocument();
    expect(getByText('Increment')).toBeInTheDocument();
    expect(getByText('Decrement')).toBeInTheDocument();
  });

  it('should render counter with default value', () => {
    const { getByTestId } = wrapper;

    const counter = getByTestId('counter');

    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent('0');
  });

  it('should increment', () => {
    const { getByText, getByTestId } = wrapper;

    fireEvent.click(getByText('Increment'));

    expect(getByTestId('counter')).toHaveTextContent('1');
  });

  it('should decrement', () => {
    const { getByText, getByTestId } = wrapper;
    
    fireEvent.click(getByText('Increment'));
    fireEvent.click(getByText('Decrement'));

    expect(getByTestId('counter')).toHaveTextContent('0');
  });

  it('should not render negative values on counter', () => {
    const { getByText, getByTestId } = wrapper;

    fireEvent.click(getByText('Decrement'));

    expect(getByTestId('counter')).toHaveTextContent('0');
  });
});

