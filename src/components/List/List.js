import React from 'react';
import ListItem from '../ListItem/ListItem';
import { connect } from 'react-redux';
import action from '../../redux/task/Actions';
import selectors from '../../redux/task/Selectors';

const List = ({ tasks, deleteTask, startTracker, pauseTracker }) => {
  console.log(tasks);
  const list = tasks.map(item => {
    return (
      <ListItem
        key={item.id}
        id={item.id}
        task={item.task}
        startTime={item.startTime}
        currentTime={item.currentTime}
        isPaused={item.isPaused}
        deleteTask={deleteTask}
        startTracker={startTracker}
        pauseTracker={pauseTracker}
      />
    );
  });
  return <ul>{list}</ul>;
};

const mapStateToProps = state => {
  return {
    tasks: selectors.getTasks(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTask: id => dispatch(action.deleteTask(id)),
    startTracker: id => dispatch(action.startTracker(id)),
    pauseTracker: (id, currentTime) => dispatch(action.pauseTracker(id, currentTime)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
