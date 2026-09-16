import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';

function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today", priorityLevel: "High" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priorityLevel: "Low" },
      { id: 3, title: "Tidy up", deadline: "Today", priorityLevel: "Medium" }
    ]
  });


  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => (
          <Task 
            key={task.id}
            title={task.title}
            description={task.description}
            deadline={task.deadline}
            priorityLevel={task.priorityLevel}
          /> 
        ))}
    </div>
  );
}

export default App;
