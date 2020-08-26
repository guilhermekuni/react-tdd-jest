import React from 'react';

const Input = ({ value, ...rest }) => {
  return (
    <input
      value={value}
      data-testid="input"
      {...rest}
    />
  );
}

export default Input;
