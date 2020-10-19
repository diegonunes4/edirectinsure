import React, {useState} from 'react'

function TaskForm(props) {
    const [input, setInput] = useState('');

    const handleInputChange = e =>{
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

         props.onSubmit({
            id: Math.floor(Math.random() * 100),
            text: input
        }); 

        setInput('')
        
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Task" value={input} name="text" className="task-input" onChange={handleInputChange} />
            <button className="task-button">Add Task</button>
        </form>
    )
};

export default TaskForm
