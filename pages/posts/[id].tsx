import React from 'react';
import Head from 'next/head';
import axios from 'axios';

import { PostItem } from '../../components/post-item/post-item';
import TopBar from '../../components/topbar/topbar';

export default function Post({ data }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <TopBar />
      <PostItem {...data} />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { data } = await axios.get(`https://simple-blog-api.crew.red/posts/${query.id}?_embed=comments`);

  return {
    props: { data },
  };
}