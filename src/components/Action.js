import React from 'react';

const Action = (props) => (
    <div>
        <button className='big-button'
            onClick={props.handlePick}
            disabled={!props.hasTasks}
        >
            Click for random task
        </button>
    </div>
);

export default Action;