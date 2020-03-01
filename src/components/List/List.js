import React from 'react';
import ListItem from '../ListItem/ListItem';
import { connect } from 'react-redux';
import action from '../../redux/task/Actions';
import selectors from '../../redux/task/Selectors';

const List = ({ tasks, deleteTask, toggleTask }) => {
  const list = tasks.map(item => {
    return (
      <ListItem
        key={item.id}
        task={item.task}
        timeCreated={item.timeCreated}
        currentTime={item.currentTime}
        isPaused={item.isPaused}
        deleteTask={() => deleteTask(item.id)}
        toggleTask={() => toggleTask(item.id)}
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
    toggleTask: id => dispatch(action.toggleTask(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
