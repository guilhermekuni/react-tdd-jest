import React from 'react';

export default function TodoList() {
  return (
    <>
      <h1>Todo List</h1>
      <label htmlFor="todoInput">New task:</label>
      <input type="text" id="todoInput" data-testid="todoInput"/>
    </>
  );
}
