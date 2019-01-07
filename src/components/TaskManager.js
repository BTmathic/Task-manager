<<<<<<< HEAD
=======
// Things to do
// 1- Switch completed toggle to tasks array (and handle the array accordingly) so completed status
// is saved with page reload as well
// 2- Resize 'click for random task' button to not be quite so large
// 3- Adjust spacing with the title and subtitle, looks a bit cramped right now

>>>>>>> b8cebb0a93c737f340c7bbdc6dfaac98092eebf4
import React from 'react';
import Action from './Action';
import AddTask from './AddTask';
import Header from './Header';
import TaskModal from './TaskModal';
import Tasks from './Tasks';

export default class TaskManager extends React.Component {
    // using 'experimental' class property syntax
    state = {
        tasks: [],
        selectedTask: undefined // keep track of whether option modal should be open or not
    }

    handleAddTask = (task) => {
        if (!task) {
            return 'Enter valid task to add';
        } else if (this.state.tasks.indexOf(task) > -1) {
            return 'Task already on list'
        }
        this.setState((prevState) => ({ tasks: prevState.tasks.concat([task]) }));
    }

    handleCloseModal = () => {
        this.setState(() => ({ selectedTask: undefined }));
    }

    handleDeleteTasks = () => {
        this.setState(() => ({ tasks: [] }));
    }

    handleDeleteTask = (taskToRemove) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((task) => taskToRemove !== task)
        }));
    }

    handlePick = () => {
<<<<<<< HEAD
=======
        // randomly select an option from the options array
>>>>>>> b8cebb0a93c737f340c7bbdc6dfaac98092eebf4
        const taskToPick = Math.floor(Math.random() * this.state.tasks.length);
        const task = this.state.tasks[taskToPick]
        this.setState(() => ({ selectedTask: task }));
    }

    componentDidMount() {
        try {
            // load data from local storage, if any
            const jsonTasks = localStorage.getItem('tasks');
            const tasks = JSON.parse(jsonTasks);

            if (tasks) { // ensure we only try to set state if there are options preset
                this.setState(() => ({ tasks }));
            }
        }

        catch (e) {
            // do nothing at all if the data provided is not valid javascript
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // ensure we only save data when something changes
        if (prevState.tasks.length !== this.state.tasks.length) {
            const jsonTasks = JSON.stringify(this.state.tasks);
            localStorage.setItem('tasks', jsonTasks);
        }
    }

    render() {
        const subtitle = 'Get organized with your day(s) and tasks';

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className='container'>
                    <Action
                        hasTasks={this.state.tasks.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className='widget'>
                        <Tasks
                            tasks={this.state.tasks}
                            completed={this.state.completed}
                            handleDeleteTasks={this.handleDeleteTasks}
                            handleDeleteTask={this.handleDeleteTask}
                        />
                        <AddTask
                            handleAddTask={this.handleAddTask}
                        />
                    </div>
                </div>
                <TaskModal
                    handleCloseModal={this.handleCloseModal}
                    selectedTask={this.state.selectedTask}
                />
            </div>
        );
    }
}