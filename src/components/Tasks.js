import React from 'react';
import Task from './Task';

const Tasks = (props) => (
    <div>
        <div className='widget-header'>
            <h3 className='widget-header__title'>Your Tasks</h3>
            <button 
                className='button button--link'
                onClick={props.handleDeleteTasks}
            >
                Remove All
            </button>
        </div>
        {props.tasks.length === 0 && <p className='widget__message'>Please add a task to get started!</p>}
        {props.tasks.map((task, index) => (
            <Task 
                key={task}
                count={index+1}
                taskText={task}
                handleDeleteTask={props.handleDeleteTask}
            />
        ))}
    </div>
);

export default Tasks;