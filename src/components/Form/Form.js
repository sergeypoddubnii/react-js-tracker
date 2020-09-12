import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../redux/task/Actions';
import styles from './Form.module.css';
import { ReactComponent as AddTask } from '../../assets/icons/addTask.svg';

const Form = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handlerChangeInput = e => {
    setTask(e.target.value);
    if (e.target.value.trim().length === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const handlerAddToTasks = e => {
    e.preventDefault();
    dispatch(actions.addTask(task));
    setTask('');
    setDisabled(true);
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
      <button type="submit" className={styles.form__btn} disabled={disabled}>
        <AddTask className={styles.form__icon} />
      </button>
    </form>
  );
};

export default Form;
