import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '.';

const inputTestId = 'input';

describe('Input', () => {
  it('shoulde render', () => {
    const { getByTestId } = render(<Input onChange={() => {}} />);
    expect(getByTestId(inputTestId)).toBeInTheDocument();
  })

  it('should render with initial value', () => {
    const testValue = 'Test Value';
    const { getByTestId } = render(<Input value={testValue} onChange={() => {}} />);

    expect(getByTestId(inputTestId).value).toBe(testValue);
  })
});
