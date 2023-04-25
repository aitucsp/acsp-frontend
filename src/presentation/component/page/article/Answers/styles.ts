import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.div`
    margin-top: 40px;
`;

export const Title = styled.h4`
    font-weight: 600;
    font-size: 28px;
    color: #13293d;
`;

export const InputBlock = styled.div`
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    padding: 12px 15px;
    margin-top: 20px;
`;

export const MyImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
`;

export const MyName = styled.span``;

export const MyInfo = styled.div`
    display: flex;
    align-items: center;
`;

export const ControlWrapper = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
`;

export const inputCss = css`
    width: 100%;
`;

export const buttonCss = css``;

export const CommentText = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: #13293d;
    margin-top: 10px;
`;
