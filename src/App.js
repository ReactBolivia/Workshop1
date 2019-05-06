import React from 'react';
import './App.css';
import TaskItem from "./components/TaskItem";

/**
 * Task
 * {
 *    id: 10,
 *    taskName: "Aprender React",
 *    completed: true / false
 * }
 */

class App extends React.Component {
  state = {
    taskList: [{
      id: 10,
      taskName: "Aprender Javascript",
      completed: true
    }, {
      id: 11,
      taskName: "Aprender ES6",
      completed: true
    }, {
      id: 12,
      taskName: "Aprender React",
      completed: false
    }]
  };

  render() {
    return (
      <div>
        {this.state.taskList.map(task => {
          const {id, taskName, completed} = task;
          return (
            <TaskItem
              key={`task-${id}`}
              taskName={taskName}
              completed={completed}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
