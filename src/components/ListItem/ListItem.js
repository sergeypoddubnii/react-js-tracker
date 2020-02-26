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
  timePaused,
  pauseTask,
  isPaused,
  startTask,
}) => {
  const initialT = !isPaused ? Date.now() - timeCreated : timePaused - timeCreated;
  console.log(isPaused);
  // let initialT = 0;

  // if (!isPaused) {
  //   initialT = Date.now() - timeCreated;
  // } else {
  //   initialT = timePaused - timeCreated;
  // }

  // console.log(timePaused);
  // console.log('initialT', initialT);
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
              <button
                onClick={() => {
                  start();
                  startTask();
                }}
                disabled={!isPaused}
                className={styles.listItem__btn}
              >
                <StartTimer className={styles.listItem__btn_start} />
              </button>
              <button
                onClick={() => {
                  pause();
                  pauseTask();
                }}
                disabled={isPaused}
                className={styles.listItem__btn}
              >
                <PauseTimer className={styles.listItem__btn_pause} />
              </button>
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
