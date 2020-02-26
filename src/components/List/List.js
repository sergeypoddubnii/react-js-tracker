import React from 'react';
import ListItem from '../ListItem/ListItem';

const List = ({ tasks, deleteTask, pauseTask, startTask }) => {
  const list = tasks.map(item => {
    return (
      <ListItem
        key={item.id}
        task={item.task}
        timeCreated={item.timeCreated}
        timePaused={item.timePaused}
        isPaused={item.isPaused}
        deleteTask={() => deleteTask(item.id)}
        pauseTask={() => pauseTask(item.id)}
        startTask={() => startTask(item.id)}
      />
    );
  });
  return <ul>{list}</ul>;
};

export default List;
