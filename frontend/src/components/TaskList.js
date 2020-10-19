import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import Task from './Task'

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        fetchTasks()
    }, [isLoading]);

    const fetchTasks = async () => {
        fetch('http://localhost:3000/api/user/Teste12123123123123')
            .then(response => response.json())
            .then(json => {
                const tasksArray = json.data[0].project[0].tasks
                setTasks(tasksArray);
                setIsLoading(false)
            })
            .catch(error => console.error('error', error));
    }

    const addTask = task => {
        //To dont let user add empty tasks
        if (!task.text || /^\s*$/.test(task.text)) {
            return
        }

        const newTasks = [task, ...tasks];

        setTasks(newTasks);
    };

    const removeTask = id => {
        const removeArr = [...tasks].filter(task => task._id !== id);

        setTasks(removeArr);
    };

    return (
        <div>
            <h1>Whats the plan for today</h1>
            <TaskForm onSubmit={addTask} />
            <Task tasks={tasks} removeTask={removeTask} />
        </div>
    )
}

export default TaskList
