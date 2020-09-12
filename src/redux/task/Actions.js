import types from './Types';
import shortId from 'shortid';

const addTask = task => {
  return {
    type: types.ADD_TASK,
    payload: {
      task,
      id: shortId.generate(),
      startTime: Date.now(),
      currentTime: 0,
      isPaused: false,
    },
  };
};

const deleteTask = id => {
  return {
    type: types.DELETE_TASK,
    payload: {
      id,
    },
  };
};

const startTracker = id => {
  return {
    type: types.START_TRACKER,
    payload: {
      id,
    },
  };
};

const pauseTracker = (id, currentTime) => {
  return {
    type: types.PAUSE_TRACKER,
    payload: {
      id,
      currentTime,
    },
  };
};

export default { addTask, deleteTask, startTracker, pauseTracker };
