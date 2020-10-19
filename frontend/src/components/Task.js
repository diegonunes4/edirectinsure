import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

function Task({ tasks, removeTask }) {
    /*     return (tasks.map((task, index) => (
            <div className={task.isComplete ? 'task-row-complete' : 'task-row'} key={index}>
                <div key={task._id} onClick={() => completeTask(task.id)}>
                    {task.name}
                </div>
                <div className="icons">
                    <RiCloseCircleLine onClick={() => removeTask(task.id)} className="delete-icon" />
                </div>
            </div>
        ))
        ) */
    return (
        <div className="Tasks">
            {tasks.map((task, index) => {
                const taskName = task.name
                return (
                    <div>
                        <div key={index}>
                            {taskName}
                        </div>
                        <div className="icons">
                            <RiCloseCircleLine onClick={() => removeTask(task._id)} className="delete-icon" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Task
