import React from 'react';
import Head from 'next/head';
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { Container } from "../../../components/_styled/container";
import { addPost } from "../../../redux/actions/actions";
import TopBar from '../../../components/topbar/topbar';

const newPost = () => {
  
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [id] = React.useState(Math.floor(100 + Math.random() * (200 - 100)));
  const [error, setError] = React.useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const createPost = () => {
    if (title === "" || body === "") {
      setError(true);
    } else {
      dispatch(addPost(title, body, id));
      router.push("/");
    }
  };
  
  return (
    <>
      <Head>
        <title>New post</title>
      </Head>
      <TopBar />
      <NewPostContainer>
        <Title>Hey, add a new post to blog!</Title>
        <Label>Title:</Label>
        <Input
          value={title}
          placeholder="Write your title*"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Label>Body:</Label>
        <Input
          value={body}
          placeholder="Write your body*"
          onChange={(e) => setBody(e.target.value)}
        />
        {error && <ErrorMassage>All fiels are required!</ErrorMassage>}
        <Button onClick={createPost}>Submit</Button>
      </NewPostContainer>
    </>
  );
};


export const NewPostContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    
    margin: 0 auto;
    padding: 70px 170px 50px;

    @media (max-width: 1170px){
        padding: 60px 11vw 50px;
    }

    @media (max-width: 855px) {
        font-size: 36px;
        padding-right: 5vw;
        padding-left: 5vw;
    }
`

const Title = styled.h1`
  font-size: 55px;
  text-align: center;
  margin-bottom: 50px;

  @media (max-width: 855px) {
    font-size: 34px;
  }

  @media (max-width: 555px) {
    font-size: 28px;
  }
`;

const Input = styled.input`
  font-size: 24px;
  border: 1px solid #333;
  width: 50%;
  padding: 10px 12px;
  margin-bottom: 27px;

  &::placeholder {
    font-size: 16px;
    color: #000;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 855px) {
  
  }

  @media (max-width: 555px) {
    width: 100%;
    &::placeholder {
      font-size: 24px;
    }
  }

`;

const Label = styled.label`
  color: #333;
  font-size: 28px;
  margin-bottom: 10px;

  @media (max-width: 855px) {
    font-size: 24px;
  }

  @media (max-width: 555px) {
    font-size: 22px;
  }

`;

const ErrorMassage = styled.div`
  color: red;
`;

const Button = styled.button`
 padding: 11px 0;
  width: 50%;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #fff;
  background: #000;
  text-transform: uppercase;
  border: none;
  outline: none;
  transition: .3s ease;
  cursor: pointer;

  &:hover {
    background: #424242;
  }

  &:focus {
    background: #333;
  }
  @media (max-width: 855px) {
    
  }

  @media (max-width: 555px) {
    width: 100%;
  }

`;

export default newPost;