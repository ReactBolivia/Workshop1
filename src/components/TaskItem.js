import React from 'react';

class TaskItem extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         editing: false,
         inputValue: props.task.name || ''
      };
   }
   handleInputChange = event => {
      this.setState({
         inputValue: event.target.value
      });
   };
   handleEditing = () => {
      this.setState(prevState => ({
         editing: !prevState.editing
      }));
   };
   onEdit = event => {
      const { task, onChange } = this.props;
      const { inputValue } = this.state;
      event.preventDefault();
      onChange({ ...task, name: inputValue });
      this.setState(() => ({
         editing: false,
         inputValue: ''
      }));
   };
   renderForm() {
      const { inputValue } = this.state;
      return (
         <form onSubmit={this.onEdit}>
            <input autoFocus type="text" onChange={this.handleInputChange} value={inputValue} />
            <button disabled={!Boolean(inputValue)}>Save</button>
         </form>
      );
   }
   renderInfo() {
      const { task } = this.props;
      return (
         <div className="task-name">
            <p className={task.completed ? 'completed-task-text' : ''}>{task.name}</p>
         </div>
      );
   }
   render() {
      const { editing } = this.state;
      return (
         <div className="task-container">
            {editing ? this.renderForm() : this.renderInfo()}

            <div className="task-actions">
               <button type="button" onClick={this.handleEditing} className="task-button">
                  {editing ? 'Cancel' : 'Edit'}
               </button>
               <button className="task-button">Delete</button>
            </div>
         </div>
      );
   }
}

export default TaskItem;
