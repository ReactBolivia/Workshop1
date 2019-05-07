import React from 'react';

class TaskItem extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         editing: false,
         inputValue: props.task.name
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
         editing: false
      }));
   };
   render() {
      const { task } = this.props;
      const { editing, inputValue } = this.state;
      const Container = editing ? 'form' : 'div';
      const containerProps = editing ? { onSubmit: this.onEdit } : {};
      return (
         <Container className="item-container" {...containerProps}>
            {editing
               ? [
                    <input
                       autoFocus
                       className="todo-input"
                       key="nameInput"
                       type="text"
                       onChange={this.handleInputChange}
                       value={inputValue}
                    />,
                    <button
                       key="saveBtn"
                       className="todo-button save"
                       disabled={!Boolean(inputValue)}
                    >
                       Save
                    </button>,
                    <button
                       key="cancelBtn"
                       className={`todo-button cancel`}
                       onClick={this.handleEditing}
                       type="button"
                    >
                       Cancel
                    </button>
                 ]
               : [
                    <span key="nameText" className="name-text">
                       {task.name}
                    </span>,
                    <button
                       key="editBtn"
                       className="todo-button edit"
                       onClick={this.handleEditing}
                       type="button"
                    >
                       Edit
                    </button>,
                    <button key="deleteBtn" className="todo-button remove">
                       Delete
                    </button>
                 ]}
         </Container>
      );
   }
}

export default TaskItem;
