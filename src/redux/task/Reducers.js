import { combineReducers } from 'redux';
import types from './Types';

const taskReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_TASK:
      return [...state, payload];
    case types.DELETE_TASK:
      return state.filter(task => task.id !== payload.id);
    case types.START_TRACKER:
      return state.map(task => {
        if (task.id === payload.id) {
          return {
            ...task,
            startTime: Date.now(),
            isPaused: false,
          };
        }
        return task;
      });
    case types.PAUSE_TRACKER:
      return state.map(task => {
        if (task.id === payload.id) {
          return {
            ...task,
            currentTime: payload.currentTime,
            isPaused: true,
          };
        }
        return task;
      });
    default:
      return state;
  }
};

export default combineReducers({
  tasks: taskReducer,
});
