import React from 'react';
import './App.css';
import TaskItem from "./components/TaskItem";

function App() {
  return (
    <div>
      <TaskItem 
        taskName="Aprender javascript"
        completed={true}
      />
      <TaskItem 
        taskName="Aprender ES6"
        completed={false}
      />
      <TaskItem 
        taskName="Aprender React"
        completed={false}
      />
      <TaskItem 
        taskName="Aprender Redux"
        completed={false}
      />
      <TaskItem
        taskName="Aprender Typescript"
        completed={false}
      />
      <TaskItem
        taskName="Descansa"
        completed={true}
      />
      <TaskItem 
        taskName="Hacer un proyecto"
        completed={true}
      />
    </div>
  );
}

export default App;
