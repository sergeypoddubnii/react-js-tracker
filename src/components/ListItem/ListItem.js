import React from 'react';
import { useDispatch } from 'react-redux';
import Timer from 'react-compound-timer';
import { ReactComponent as StartTimer } from '../../assets/icons/start-timer.svg';
import { ReactComponent as PauseTimer } from '../../assets/icons/pause.svg';
import { ReactComponent as DeleteTask } from '../../assets/icons/delete-timer.svg';
import actions from '../../redux/task/Actions';
import styles from './ListItem.module.css';
import timerHelpers from '../../utils/timerHelpers';

const ListItem = ({ task, id, startTime, currentTime, isPaused }) => {
  const dispatch = useDispatch();
  //handlers
  const handlerDeleteTask = () => {
    dispatch(actions.deleteTask(id));
  };

  const handlerStartTimer = start => {
    start();
    dispatch(actions.startTracker(id));
  };

  const handlerPauseTimer = (timerPause, getTime) => {
    timerPause();
    dispatch(actions.pauseTracker(id, getTime()));
  };

  //start stop task tracker
  let initialTime = 0;
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
              {timerHelpers.getSeconds(Timer.Hours()._owner.memoizedState.h)} :
              {timerHelpers.getSeconds(Timer.Minutes()._owner.memoizedState.m)} :
              {timerHelpers.getSeconds(Timer.Seconds()._owner.memoizedState.s)}
            </div>
            <div>
              {isPaused && (
                <button onClick={() => handlerStartTimer(start)} className={styles.listItem__btn}>
                  <StartTimer className={styles.listItem__btn_start} />
                </button>
              )}
              {!isPaused && (
                <button
                  onClick={() => handlerPauseTimer(pause, getTime)}
                  className={styles.listItem__btn}
                >
                  <PauseTimer className={styles.listItem__btn_pause} />
                </button>
              )}
              <button type="button" onClick={handlerDeleteTask} className={styles.listItem__btn}>
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
