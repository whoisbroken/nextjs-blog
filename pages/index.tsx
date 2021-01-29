import React from 'react';
import Head from 'next/head';

import Layout  from '../components/layout';
import Loader from '../components/loader';
import { Posts } from "../components/posts/posts";

import { useFetchPostData } from "../customHook/useFetchPostData";

const Home = () => {  
  const { posts, loading } = useFetchPostData();

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Layout />
      {loading ? (
        <Loader />
        ) : (
        <Posts posts={posts} />
        )
      }
    </>
  );
}

export default Home