import React from 'react';

export default function TodoList() {
  return (
    <>
      <h1>Todo List</h1>
      <label htmlFor="todoInput">New task:</label>
      <input type="text" id="todoInput" data-testid="todoInput"/>
      <button>Add task</button>

      <ul data-testid="taskList">
        <h2>There is no task to do!</h2>
      </ul>
    </>
  );
}
