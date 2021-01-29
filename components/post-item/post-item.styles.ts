import styled from 'styled-components';

import { Container } from "../_styled/container";


export const PostItemContainer = styled(Container)`
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
    


`;

export const Title = styled.h2`
    font-size: 55px;
    font-weight: 600;
    margin: 0 0 .2em;
    padding: 0 0 0.5em;
    border-bottom: 1px solid #eaeff1;

    @media (max-width: 855px) {
        font-size: 36px;
    }

    @media (max-width: 650px){
        font-size: 24px;
    }
`;

export const Body = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.palette.midGrey};
    line-height: 1.5;
    margin-bottom: 50px;

    @media (max-width: 650px){
        font-size: 14px;
    }
`;

export const Comments = styled.h3`
    font-size: 24px;
    font-weight: 500;
    margin: 0 0 .2em;
    padding: 0 0 0.5em;

    @media (max-width: 650px){
        font-size: 18px;
    }
`;

export const Comment = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.palette.midGrey};
    margin-bottom: 10px;
    padding-left: 35px;

    @media (max-width: 650px){
        font-size: 14px;
    }
`;