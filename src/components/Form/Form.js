import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../redux/task/Actions';
import styles from './Form.module.css';
import { ReactComponent as AddTask } from '../../assets/icons/addTask.svg';

const Form = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  const handlerChangeInput = e => {
    setTask(e.target.value);
  };

  const handlerAddToTasks = e => {
    e.preventDefault();
    dispatch(actions.addTask(task));
    setTask('');
  };

  return (
    <form onSubmit={handlerAddToTasks} className={styles.form}>
      <input
        type="text"
        placeholder="tracker name"
        onChange={handlerChangeInput}
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
