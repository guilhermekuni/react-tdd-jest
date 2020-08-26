import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '.';

describe('Input', () => {
  it('shoulde render', () => {
    const { getByTestId } = render(<Input />);
    expect(getByTestId('input')).toBeInTheDocument();
  })
});