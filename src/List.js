import React from 'react';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Card, Button, ListGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import mockList from './mocklist';

const limit = 10;

const List = ({ user }) => {
  const [offset, setOffset] = useState(20);
  const [hasMore, setHasMore] = useState(true);

  const history = useHistory();

  const fetchMore = () => {
    if (offset >= mockList.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setOffset(offset + limit);
    }, 1500);
  };

  const list = mockList.slice(0, offset);

  return (
    <>
      <Card>
        <Card.Body className="d-flex flex-row justify-content-between">
          <h4>Hello {user.username}</h4>
          <Button
            className="btn-danger waves-effect"
            onClick={() => history.push('/')}
          >
            Log Out
          </Button>
        </Card.Body>
      </Card>
      <InfiniteScroll
        dataLength={list.length}
        next={fetchMore}
        hasMore={hasMore}
        loader={<h5>Loading...</h5>}
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
                key={el.id}
                className="d-flex flex-row align-items-center"
              >
                <Card.Img
                  width={100}
                  height={100}
                  alt={el.login}
                  src={el.avatar_url}
                  variant="left"
                  className="img-thumbnail rounded-circle mr-4"
                />
                <div className="px-4">
                  <Card.Title>{el.login}</Card.Title>
                  <Card.Subtitle>{el.login}</Card.Subtitle>
                </div>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </InfiniteScroll>
    </>
  );
};

export default List;
