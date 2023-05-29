import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.div`
    padding: 32px 20px;
`;

export const Title = styled.h1`
    font-weight: 400;
    font-size: 32px;
    color: #13293d;
`;

export const Header = styled.div`
    background: #ffffff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    padding: 30px 40px;
    display: grid;
    grid-template-columns: 130px 1fr 240px;
    gap: 20px;
    margin-top: 20px;
`;

export const AuthorImage = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 50%;
    object-fit: cover;
`;

export const AuthorInfo = styled.div``;
export const AuthorName = styled.h2`
    font-weight: 900;
    font-size: 24px;
    color: #13293d;
`;

export const AuthorDescription = styled.p`
    font-weight: 400;
    font-size: 12px;
    color: #13293d;
`;

export const reviewButtonCss = css`
    font-size: 14px;
    margin-top: 15px;
    width: fit-content;
`;

export const Skills = styled.div``;

export const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
`;

export const Skill = styled.div`
    background: #0da16c;
    border-radius: 6px;
    font-weight: 900;
    font-size: 12px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 0;
`;
