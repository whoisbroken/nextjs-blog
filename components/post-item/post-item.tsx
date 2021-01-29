import React from 'react';
import { Body, Comments, Comment, Title, PostItemContainer } from './post-item.styles';

interface Comment {
  id: number;
  body: string;
}

export interface PostInterface {
  title: string;
  body: string;
  comments: Array<Comment>;
}

export const PostItem = ({ title, body, comments }: PostInterface) => {
  return (
    <PostItemContainer key={title}>
      <Title>{title}</Title>
      <Body>{body}</Body>
      <Comments>Comments:</Comments>
      {comments.length ? (
        comments.map(item => {
        return <Comment key={item.id}>{item.body}</Comment>;
        })
        ) : (
          <Comment>Unfortunately there are no comments yet on this article.</Comment>
        )
      }
    </PostItemContainer>
  );
};