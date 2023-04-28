import React, { useState } from 'react';

const Task = (props) => {
  const { task, editTask, deleteTask, toggleCompleted } = props;

  const handleEdit = (event) => {
    event.preventDefault();
    const updatedTitle = window.prompt('Enter a new title for the task', task.title);
    if (updatedTitle && updatedTitle.trim() !== '') {
      editTask(task.id, updatedTitle.trim());
    }
  };
  const handleDelete = (event) => {
    event.preventDefault();
    const confirmation = window.confirm(`Are you sure you want to delete "${task.title}"?`);
    if (confirmation) {
      deleteTask(task.id);
    }
  };

  const handleCompleted = (event) => {
    toggleCompleted(task.id);
  };
    return (
     <div>
   <li className="flex items-center">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCompleted}
        className="mr-2"
      />
      <span
        className={`flex-grow ${task.completed ? 'line-through text-gray-500' : 'text-black'}`}
      >
        {task.title}
      </span>
      <button onClick={handleEdit}  class="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300 mr-4">
        Edit
      </button>
      <button onClick={handleDelete} class="rounded-lg px-4 py-2 bg-red-600 text-red-100 hover:bg-red-700 duration-300">
        Delete
      </button>
      </li>
     </div>
    );
};

export default Task;