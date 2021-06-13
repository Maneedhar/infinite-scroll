import React from 'react';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Card, ListGroup } from 'react-bootstrap';

import people from './people';

const limit = 10;

const List = () => {
  const [offset, setOffset] = useState(20);
  const [hasMore, setHasMore] = useState(true);
  const [loadingList, setLoadingList] = useState(false);

  const fetchMore = () => {
    setLoadingList(true);
    if (offset >= people.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setOffset((prevOffset) => prevOffset + limit);
      setLoadingList(false);
    }, 1500);
  };

  const list = people.slice(0, offset);
  console.log(list);

  return (
    <>
      <InfiniteScroll
        dataLength={list.length}
        next={fetchMore}
        hasMore={hasMore}
        loader={<></>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <ListGroup>
          {list.map((el) => {
            return (
              <ListGroup.Item
                key={el.login.uuid}
                className="d-flex flex-row align-items-center"
              >
                <Card.Img
                  width={50}
                  height={50}
                  alt={el.name.first}
                  src={el.picture.thumbnail}
                  variant="left"
                  className="img-thumbnail rounded-circle mr-4"
                />
                <div className="px-4">
                  <Card.Title>{el.name.first + el.name.last}</Card.Title>
                  <Card.Subtitle>{el.cell}</Card.Subtitle>
                </div>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
        {loadingList ? <h4>Loading ....</h4> : null}
      </InfiniteScroll>
    </>
  );
};

export default List;
