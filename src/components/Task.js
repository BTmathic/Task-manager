import React from 'react';

export default class Task extends React.Component {
    state = {
        completed: ''
    }

    handleCompletePress = () => {
        this.setState((prevState) => ({ completed: !prevState.completed }));
    }

    componentDidMount() {
        try {
            // load data from local storage, if any
            const jsonCompleted = localStorage.getItem(this.props.taskText + 'completed');
            const completed = JSON.parse(jsonCompleted);

            if (jsonCompleted) { // ensure we only try to set state if something is preset
                this.setState(() => ({ completed }));
            }
        }

        catch (e) {
            // do nothing at all if the data provided is not valid javascript
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // ensure we only save data when something changes
        if (prevState.completed !== this.state.completed) {
            const jsonCompleted = JSON.stringify(this.state.completed);
            
            localStorage.setItem(this.props.taskText + 'completed', jsonCompleted);
        }
    }

    render() {
        return (
            <div className='task'>
                <p className='task__text'>{this.props.count}. {this.props.taskText}</p>
                <div className='task-options'>
                    
                    <button
                        className='button' className={this.state.completed ? 'button--complete' : 'button--incomplete'}
                        onClick={() => { this.handleCompletePress() }}
                    >
                        {this.state.completed ? 'Complete' : 'Incomplete'}
                    </button>
                    <button
                        className='button button--link'
                        onClick={(e) => {
                            this.props.handleDeleteTask(this.props.taskText);
                        }}
                    >
                        Remove
                    </button>
                </div>
            </div>
        )
    };
}