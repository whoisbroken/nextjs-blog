import styled from 'styled-components';

export const Wrapper = styled.main`
    display: flex;
    flex-wrap: wrap;
    padding: 40px 0;
    color: #000;
`;

export const PostTitle = styled.h2`
    color: #333;
    margin-bottom: 15px;
    font-size: 22px;
    line-height: 1.4;
    word-break: break-word;
`;

export const Post = styled.article`
    padding: 10px;
    width: 100%;
    cursor: pointer;
    margin-bottom: 20px;
    text-align: center;
    @media (min-width: 768px) {
        text-align: left;
        width: 50%;
    }
    @media (min-width: 1140px) {
        width: 30%;
        margin-right: 40px;
        margin-bottom: 20px;
    }
    &:nth-child(3n) {
        margin-right: 0;
    }
`;




export const PostBody = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #333;
    font-size: 15px;
    max-width: 400px;
    margin: 0 auto;
    @media (min-width: 768px) {
        margin: 0;
    }
    @media (min-width: 1140px) {
        max-width: 400px;
    }
`;