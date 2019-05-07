import React from 'react';
import TaskItem from './components/TaskItem';

/**
 * Task
 * {
 *    id: 10,
 *    taskName: "Aprender React",
 *    completed: true / false
 * }
 */

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         inputValue: '',
         taskList: []
      };
   }

   handleInputChange = event => {
      this.setState({
         inputValue: event.target.value
      });
   };

   addTask = event => {
      event.preventDefault();
      this.setState(prevState => ({
         inputValue: '',
         taskList: [
            ...prevState.taskList,
            {
               completed: false,
               id: prevState.taskList.length,
               taskName: prevState.inputValue
            }
         ]
      }));
   };

   render() {
      const { inputValue, taskList } = this.state;
      return (
         <React.Fragment>
            <header>
               <h1>TODO APP</h1>
            </header>

            <main>
               <form onSubmit={this.addTask}>
                  <input onChange={this.handleInputChange} type="text" value={inputValue} />
                  <button disabled={!Boolean(inputValue.trim())}>Add</button>
               </form>

               <div>
                  {taskList.map(({ id, taskName, completed }) => (
                     <TaskItem key={`task-${id}`} taskName={taskName} completed={completed} />
                  ))}
               </div>
            </main>

            <footer>
               <span>Copyright @2019 - React Workshop - Free Usage</span>
            </footer>
         </React.Fragment>
      );
   }
}

export default App;
