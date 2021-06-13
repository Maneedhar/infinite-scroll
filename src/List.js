import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import list from './mocklist';

const List = ({ user }) => {
  return <div>{user.username}</div>;
};

export default List;
