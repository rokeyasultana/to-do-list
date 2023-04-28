import React from 'react';
import Task from '../Task/Task';

const TaskList = (props) => {
  const { tasks, editTask, deleteTask, toggleCompleted } = props;
    return (
      <ul className="space-y-2">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </ul>
        
    );
};

export default TaskList;