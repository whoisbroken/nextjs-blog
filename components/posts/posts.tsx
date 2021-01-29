import React from 'react';
import Link from 'next/link';
import { Post, PostBody, PostTitle, Wrapper } from './posts.styles';

interface Post {
  title: string;
  body: string;
  id: number | string;
}

interface Props {
  posts: Array<Post>;
}

export const Posts = ({ posts }: Props) => {
  return (
    <Wrapper>
      {posts
        .filter((item) => item.title && item.body)
        .map((item) => {
          return (
            <Link href={`posts/${item.id}`} key={item.id}>
              <Post>
                <PostTitle>{item.title}</PostTitle>
                <PostBody>{item.body}</PostBody>
              </Post>
            </Link>
          );
        })}
    </Wrapper>
  );
};