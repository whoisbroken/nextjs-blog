import styled from 'styled-components';

import { Container } from "../_styled/container";

export const PostsContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  padding: 40px 16px;
`;

export const PostTitle = styled.h2`
    margin-bottom: 15px;
    font-size: 22px;
    line-height: 1.4;
    word-break: break-word;
`;

export const Post = styled.article`
    flex: 1 1 301px;
    padding: 20px 20px 40px;
    min-height: 220px;
    text-align: center;
    border-bottom: 1px solid #eaeff1;
    cursor: pointer;

    @media (max-width: 650px) {
        padding: 10px 10px 20px;
    }

    &:nth-child(4n) {
        flex: 1 1 100%;
    }

    &:nth-child(10n),
    &:nth-child(11n) {
        margin-right: 0;
        flex: 1 1 41%;  
    }
`;


export const PostBody = styled.p`
    font-size: 16px;
    color: ${({ theme }) => theme.palette.midGrey};
    @media (min-width: 768px) {
        margin: 0;
    }
`;