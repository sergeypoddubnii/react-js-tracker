import React, { useMemo } from 'react';
import ListItem from '../ListItem/ListItem';
import { useSelector } from 'react-redux';
import selectors from '../../redux/task/Selectors';

const List = () => {
  const tasks = useSelector(selectors.getTasks);

  const list = useMemo(() => {
    return tasks.map(item => {
      return (
        <ListItem
          key={item.id}
          id={item.id}
          task={item.task}
          startTime={item.startTime}
          currentTime={item.currentTime}
          isPaused={item.isPaused}
        />
      );
    });
  }, [tasks]);
  return <ul>{list}</ul>;
};

export default List;
