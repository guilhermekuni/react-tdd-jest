import React, { useState } from 'react';

export default function TodoList() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    const updatedTaskList = [...tasks, newTask];

    setTasks(updatedTaskList);
    setNewTask('');
  };

  const handleRemoveTask = (item) => {
    const updatedTaskList = tasks.filter(task => task !== item);

    setTasks(updatedTaskList);
  };

  return (
    <>
      <h1>Todo List</h1>

      <label htmlFor="todoInput">New task:</label>
      <input
        type="text"
        id="todoInput"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        data-testid="todoInput"
      />

      <button onClick={handleAddTask}>Add task</button>

      <ul data-testid="taskList">
        {
          (tasks && tasks.length > 0)
            ? (tasks.map((item, index) => (
              <li key={index}>
                {item}
                <span
                  onClick={() => handleRemoveTask(item)}
                  data-testid={`remove-item-${index}`}
                >
                  Remove
                </span>
              </li>)))
            : <h2>There is no task to do!</h2>
        }
      </ul>
    </>
  );
}
