import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (title.trim()) {
        addTask(title);
        setTitle('');
      }
    };
    
    return (
        <div>
          <form onSubmit={handleSubmit} className="flex items-center my-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a task"
        className="w-full rounded-l-lg px-4 py-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
      />
      <button
        type="submit"
        className="px-4 rounded-r-lg bg-blue-500 text-white font-bold p-2 border-blue-700 border-t border-b border-r"
      >
        Add
      </button>
    </form>
        </div>
    );
};

export default AddTaskForm;