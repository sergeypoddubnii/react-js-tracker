import React from 'react';
import { useDispatch } from 'react-redux';
import Timer from 'react-compound-timer';
import { ReactComponent as StartTimer } from '../../assets/icons/start-timer.svg';
import { ReactComponent as PauseTimer } from '../../assets/icons/pause.svg';
import { ReactComponent as DeleteTask } from '../../assets/icons/delete-timer.svg';
import actions from '../../redux/task/Actions';
import styles from './ListItem.module.css';

const ListItem = ({ task, id, startTime, currentTime, isPaused, deleteTask }) => {
  let initialTime = 0;
  const dispatch = useDispatch();
  const handlerDeleteTask = () => {
    dispatch(actions.deleteTask(id));
  };
  //start stop task tracker
  if (isPaused && currentTime) {
    initialTime = currentTime;
  } else if (currentTime) {
    initialTime = Date.now() - startTime + currentTime;
  } else if (!isPaused && !currentTime) {
    initialTime = Date.now() - startTime;
  }
  return (
    <li className={styles.listItem}>
      <p className={styles.listItem__text}>{task}</p>
      <Timer initialTime={initialTime} startImmediately={!isPaused}>
        {({ start, pause, getTime }) => (
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
                    dispatch(actions.startTracker(id));
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
                    dispatch(actions.pauseTracker(id, getTime()));
                  }}
                  className={styles.listItem__btn}
                >
                  <PauseTimer className={styles.listItem__btn_pause} />
                </button>
              )}
              <button
                type="button"
                onClick={handlerDeleteTask}
                className={styles.listItem__btn}
              >
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
