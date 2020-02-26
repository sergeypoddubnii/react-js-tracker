import React, { useState, useEffect } from 'react';
import shortId from 'shortid';
import localStorage from '../../services/localStorage';
import Form from '../Form/Form';
import List from '../List/List';
import styles from './App.module.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log('get from local storage');
    if (localStorage.getFromLocalStorage('tasks')) {
      setTasks(localStorage.getFromLocalStorage('tasks'));
      return;
    }
  }, []);

  useEffect(() => {
    if (tasks) {
      console.log('add to local storage');
      localStorage.addToLocalStorage(tasks);
    }
  }, [tasks]);

  const addToTasks = task => {
    console.log(tasks);
    if (!task.trim()) {
      const newTask = {
        task: Date.now(),
        id: shortId.generate(),
        timeCreated: Date.now(),
        timePaused: 0,
        isPaused: false,
      };
      setTasks([...tasks, newTask]);
      return;
    }
    const newTask = {
      task,
      id: shortId.generate(),
      timeCreated: Date.now(),
      timePaused: 0,
      isPaused: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const pauseTask = id => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, timePaused: Date.now(), isPaused: true };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const startTask = id => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, isPaused: false };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className={styles.taskContainer}>
      <h1 className={styles.taskContainer__title}>tracker</h1>
      <Form addToTasks={addToTasks} />
      <List
        tasks={tasks}
        deleteTask={deleteTask}
        pauseTask={pauseTask}
        startTask={startTask}
      />
    </div>
  );
};

export default App;
