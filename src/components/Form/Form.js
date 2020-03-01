import React, { useState } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/task/Actions';
import styles from './Form.module.css';
import { ReactComponent as AddTask } from '../../assets/icons/addTask.svg';

const Form = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handlerChangeTask = e => {
    setTask(e.target.value);
  };

  const handlerAddToTrackers = e => {
    e.preventDefault();
    addTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handlerAddToTrackers} className={styles.form}>
      <input
        type="text"
        placeholder="tracker name"
        onChange={handlerChangeTask}
        value={task}
        className={styles.form__input}
      />
      <button type="submit" className={styles.form__btn}>
        <AddTask className={styles.form__icon} />
      </button>
    </form>
  );
};

const mapDispatchToProps = dispatch => {
  return { addTask: task => dispatch(actions.addTask(task)) };
};

export default connect(null, mapDispatchToProps)(Form);
