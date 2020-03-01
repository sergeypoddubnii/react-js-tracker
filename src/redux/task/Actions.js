import types from './Types';
import shortId from 'shortid';

const addTask = task => {
  if (!task.trim()) {
    return {
      type: types.ADD_TASK,
      payload: {
        task: Date.now(),
        id: shortId.generate(),
        timeCreated: Date.now(),
        timePaused: 0,
        isPaused: false,
      },
    };
  }
  return {
    type: types.ADD_TASK,
    payload: {
      task,
      id: shortId.generate(),
      timeCreated: Date.now(),
      timePaused: 0,
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

const toggleTask = id => {
  return {
    type: types.TOGGLE_TASK,
    payload: {
      id,
    },
  };
};

export default { addTask, deleteTask, toggleTask };
