import React from 'react';
import TaskItem from './components/TaskItem';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         stateFilter: 'all',
         inputValue: '',
         taskList: []
      };
   }

   getList() {
      const { taskList, stateFilter } = this.state;
      return taskList.filter(item => {
         if (
            (item.completed && stateFilter === 'alife') ||
            (!item.completed && stateFilter === 'death')
         ) {
            return false;
         }
         return true;
      });
   }

   handleInputChange = event => {
      this.setState({
         inputValue: event.target.value
      });
   };

   handleStateFilter = e => {
      this.setState({
         stateFilter: e.target.value
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

   renderAddForm() {
      const { inputValue } = this.state;
      return (
         <form className="got-inline-form" key="add-form" onSubmit={this.addTask}>
            <input
               className="got-input"
               onChange={this.handleInputChange}
               placeholder="Write a name"
               type="text"
               value={inputValue}
            />
            <button className="got-button save" disabled={!Boolean(inputValue.trim())}>
               Add
            </button>
         </form>
      );
   }

   renderFilters() {
      return (
         <div
            className="tabs-row"
            key="filters"
            role="radiogroup"
            onChange={this.handleStateFilter}
         >
            <div className="got-radio">
               <input type="radio" id="all" name="stateFilter" value="all" defaultChecked={true} />
               <label htmlFor="all">All</label>
            </div>
            <div className="got-radio">
               <input type="radio" id="alife" name="stateFilter" value="alife" />
               <label htmlFor="alife">Alife</label>
            </div>
            <div className="got-radio">
               <input type="radio" id="death" name="stateFilter" value="death" />
               <label htmlFor="death">Death</label>
            </div>
         </div>
      );
   }

   render() {
      const list = this.getList();
      return (
         <React.Fragment>
            <header>
               <h1>GOT, WHO WILL DIE?</h1>
            </header>

            <main>
               <div className="action-bar">{[this.renderAddForm(), this.renderFilters()]}</div>
               <div className="list-container">
                  {list.length > 0 ? (
                     list.map(task => (
                        <TaskItem key={`task-${task.id}`} task={task} onChange={this.updateTask} />
                     ))
                  ) : (
                     <div>
                        <span>No Results for this filter</span>
                     </div>
                  )}
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
