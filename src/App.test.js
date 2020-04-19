import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Counter', () => {
  it('should render', () => {
    const { getByText } = render(<App />);

    expect(getByText('Counter:')).toBeInTheDocument();
    expect(getByText('Increment')).toBeInTheDocument();
    expect(getByText('Decrement')).toBeInTheDocument();
  });

  it('should render counter with default value', () => {

  });
});

