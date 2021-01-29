import React from 'react';
import Head from 'next/head';
import { useRouter } from "next/router";
import {connect} from 'react-redux'
import { createStructuredSelector } from "reselect";

import { selectPosts, selectComments } from "../../redux/selectors/posts";
import { PostItem } from '../../components/post-item/post-item';
import TopBar from '../../components/topbar/topbar';

const Post = ({ posts, comments }) => {
  
  const router = useRouter();
  
  const post = posts.find(item => item.id == router.query.id);
  const actualComments = comments.filter(item => item.postId == router.query.id)
  
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <TopBar />
      <PostItem {...post} comments={actualComments}/>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  posts: selectPosts,
  comments: selectComments,
});

export default connect(mapStateToProps, null)(Post);