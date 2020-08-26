import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '.';

describe('Counter', () => {
  let component;

  beforeEach(() => {
    component = render(<Counter />);
  });

  it('should render', () => {
    const { getByText } = component;

    expect(getByText('Counter:')).toBeInTheDocument();
    expect(getByText('Increment')).toBeInTheDocument();
    expect(getByText('Decrement')).toBeInTheDocument();
  });

  it('should render counter with default value', () => {
    const { getByTestId } = component;

    const counter = getByTestId('counter');

    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent('0');
  });

  it('should increment', () => {
    const { getByText, getByTestId } = component;

    fireEvent.click(getByText('Increment'));

    expect(getByTestId('counter')).toHaveTextContent('1');
  });

  it('should decrement', () => {
    const { getByText, getByTestId } = component;

    fireEvent.click(getByText('Increment'));
    fireEvent.click(getByText('Decrement'));

    expect(getByTestId('counter')).toHaveTextContent('0');
  });

  it('should not render negative values on counter', () => {
    const { getByText, getByTestId } = component;

    fireEvent.click(getByText('Decrement'));

    expect(getByTestId('counter')).toHaveTextContent('0');
  });
});
