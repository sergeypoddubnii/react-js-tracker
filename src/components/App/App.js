import React from 'react';
import Form from '../Form/Form';
import List from '../List/List';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.taskContainer}>
      <h1 className={styles.taskContainer__title}>tracker</h1>
      <Form />
      <List />
    </div>
  );
};

export default App;
