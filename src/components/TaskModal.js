import React from 'react';
import Modal from 'react-modal';

const TaskModal = (props) => (
    <Modal
        isOpen={!!props.selectedTask}
        onRequestClose={props.handleCloseModal}
        contentLabel='Selected Task'
        closeTimeoutMS={200}
        className='modal'
    >
        <h3 className='modal__title'>Selected Task</h3>
        {props.selectedTask && <p className='modal__body'>{props.selectedTask}</p>}
        <button className='button' onClick={props.handleCloseModal}>Okay!</button>
    </Modal>
);

export default TaskModal;