import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.div``;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 270px;
    gap: 30px;
    margin-top: 20px;
`;

export const SearchBar = styled.input`
    height: 46px;
    padding: 15px 20px;
    font-weight: 400;
    font-size: 16px;
    color: #b6bbc8;
    background: #ffffff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    width: 100%;
    border: none;
`;

export const Left = styled.div``;

export const Right = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: fit-content;
    gap: 10px;
`;

export const wideButtonCss = css`
    width: 100%;
`;
