import React, { useState } from 'react';
import styles from './Form.module.css';
import { ReactComponent as AddTask } from '../../assets/icons/addTask.svg';
const Form = ({ addToTasks }) => {
  const [task, setTask] = useState('');

  const handlerChangeTask = e => {
    setTask(e.target.value);
  };

  const handlerAddToTrackers = e => {
    e.preventDefault();
    addToTasks(task);
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

export default Form;
