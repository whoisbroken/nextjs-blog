import React from 'react';
import Head from 'next/head';
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { addPost } from "../../../redux/actions/actions";
import TopBar from '../../../components/topbar/topbar';

const newPost = () => {
  
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [error, setError] = React.useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const createPost = () => {
    if (title === "" || body === "") {
      setError(true);
    } else {
      dispatch(addPost(title, body));
      router.push("/");
    }
  };
  
  return (
    
    <>
      <Head>
        <title>New post</title>
      </Head>
      <TopBar />
      <Wrapper>
        <Title>Create your own post</Title>
        <Label>Title</Label>
        <Input
          value={title}
          placeholder="Write your title*"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Label>Body</Label>
        <Input
          value={body}
          placeholder="Write your body*"
          onChange={(e) => setBody(e.target.value)}
        />
        {error && <ErrorMassage>All fiels are required!</ErrorMassage>}
        <Button onClick={createPost}>Submit</Button>
      </Wrapper>
    </>
  );
}


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  height: 100vh;
  text-align: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #333;
  font-size: 80px;
  text-align: center;
  margin: 0 0 100px;
`;

const Input = styled.input`
  outline: none;
  width: 300px;
  border: 3px solid #333;
  padding: 15px 25px;
  border-radius: 20px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  color: white;
  font-size: 30px;
`;

const ErrorMassage = styled.div`
  color: red;
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: rgb(28, 176, 246);
  box-shadow: rgb(19, 158, 224) 0px -4px 0px 0px inset;
  border-radius: 10px;
  padding: 10px 24px 11px;
  width: auto;
  color: white;
  text-transform: uppercase;
  margin: 40px auto ;
  font-size: 16px;
  outline: none;
`;

export default newPost;