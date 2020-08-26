import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '.';

const inputTestId = 'input';

describe('Input', () => {
  it('shoulde render', () => {
    const { getByTestId } = render(<Input onChange={() => { }} />);
    expect(getByTestId(inputTestId)).toBeInTheDocument();
  });

  it('should render with initial value', () => {
    const testValue = 'Test Value';
    const { getByTestId } = render(<Input value={testValue} onChange={() => { }} />);

    expect(getByTestId(inputTestId).value).toBe(testValue);
  });

  it('should change value', () => {
    let testValue = 'Test 1';

    const changeValue = (value) => {
      testValue = value;
    }

    const { getByTestId, rerender } = render(
      <Input
        value={testValue}
        onChange={(e) => changeValue(e.target.value)}
      />
    );

    const input = getByTestId(inputTestId);

    expect(input.value).toBe('Test 1');

    fireEvent.change(input, { target: { value: 'Test 2' } });

    rerender(<Input value={testValue} onChange={(e) => changeValue(e.target.value)} />);

    expect(input.value).toBe('Test 2');
  });
});
