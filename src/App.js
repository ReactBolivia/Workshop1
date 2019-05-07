import React from 'react';
import TaskItem from './components/TaskItem';

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
               name: prevState.inputValue
            }
         ]
      }));
   };

   updateTask = task => {
      const { taskList } = this.state;
      const updatedList = taskList.map(item => {
         if (item.id === task.id) {
            return task;
         }
         return item;
      });

      this.setState(() => ({
         taskList: updatedList
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
               <form className="todo-inline-form" onSubmit={this.addTask}>
                  <input
                     className="todo-input"
                     onChange={this.handleInputChange}
                     placeholder="Write an activity"
                     type="text"
                     value={inputValue}
                  />
                  <button className="todo-button save" disabled={!Boolean(inputValue.trim())}>
                     Add
                  </button>
               </form>

               <div className="list-container">
                  {taskList.map(task => (
                     <TaskItem key={`task-${task.id}`} task={task} onChange={this.updateTask} />
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
