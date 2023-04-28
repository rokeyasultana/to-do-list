import { useState } from 'react';
import './App.css';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import TaskList from './TaskList/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskTitle) => {
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const editTask = (taskId, updatedTitle) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, title: updatedTitle } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };


  return (
    <div className="App">
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-black mt-20 mb-20">To Do List</h1>
      <TaskList
        tasks={tasks}
        editTask={editTask}
        deleteTask={deleteTask}
        toggleCompleted={toggleCompleted}
      />
      <AddTaskForm addTask={addTask} />
    </div>
    </div>
  );
}

export default App;
