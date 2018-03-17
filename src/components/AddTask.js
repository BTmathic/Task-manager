import React from 'react';

export default class AddTask extends React.Component {
    // class properties syntax
    state = {
        error: undefined
    };

    handleAddTask = (e) => {
        e.preventDefault();
        const task = e.target.elements.task.value;
        const error = this.props.handleAddTask(task);
        
        // we can shorthand error: error as they have the same name
        this.setState(() => ({ error }));

        if (!error) {
            // if there was no error, clear the input
            e.target.elements.task.value = '';
        }
    };

    render() {
        let newTask = '';
        return (
            <div>
                {this.state.error && <p className='add-task-error'>{this.state.error}</p>}
                <form className='add-task' onSubmit={this.handleAddTask}>
                    <input
                        className='add-task__input'
                        type='text'
                        name='task'
                        placeholder='Add new task...'
                    />
                    <button className='button'>Add Task</button>
                </form>
            </div>
        );
    };
}