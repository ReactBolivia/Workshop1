import React from "react";
import './task.css';

class TaskItem extends React.Component {
    render() {
        return (
            <div className="task-container">
                <div className="task-name">
                    <p>Esta es una tarea</p>
                </div>
                <div className="task-actions">
                    <button className="task-button">Edit</button>
                    <button className="task-button">Delete</button>
                </div>
            </div>
        );
    }
}

export default TaskItem;