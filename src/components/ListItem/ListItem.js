import React from 'react';
import Timer from 'react-compound-timer';
import { ReactComponent as StartTimer } from '../../assets/icons/start-timer.svg';
import { ReactComponent as PauseTimer } from '../../assets/icons/pause.svg';
import { ReactComponent as DeleteTask } from '../../assets/icons/delete-timer.svg';
import styles from './ListItem.module.css';

const ListItem = ({
  task,
  deleteTask,
  timeCreated,
  currentTime,
  toggleTask,
  isPaused,
}) => {
  let initialT = 0;

  if (currentTime) {
    console.log('take paused time!');
    initialT = currentTime;
  } else {
    console.log('take real time!');
    initialT = Date.now() - timeCreated;
  }

  return (
    <li className={styles.listItem}>
      <p className={styles.listItem__text}>{task}</p>
      <Timer initialTime={initialT} startImmediately={!isPaused}>
        {({ start, pause }) => (
          <>
            <div className={styles.listItem__timer}>
              <Timer.Days /> :
              <Timer.Hours /> :
              <Timer.Minutes /> :
              <Timer.Seconds />
            </div>
            <div>
              {isPaused && (
                <button
                  onClick={() => {
                    start();
                    toggleTask();
                  }}
                  className={styles.listItem__btn}
                >
                  <StartTimer className={styles.listItem__btn_start} />
                </button>
              )}
              {!isPaused && (
                <button
                  onClick={() => {
                    pause();
                    toggleTask();
                  }}
                  className={styles.listItem__btn}
                >
                  <PauseTimer className={styles.listItem__btn_pause} />
                </button>
              )}
              <button type="button" onClick={deleteTask} className={styles.listItem__btn}>
                <DeleteTask className={styles.listItem__btn_delete} />
              </button>
            </div>
          </>
        )}
      </Timer>
    </li>
  );
};
export default ListItem;
