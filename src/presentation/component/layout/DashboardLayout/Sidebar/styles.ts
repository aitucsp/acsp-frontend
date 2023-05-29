import styled from '@emotion/styled';
import { darken, lighten, rem } from 'polished';

export const Wrapper = styled.div`
    padding-right: 20px;
    margin-top: 40px;
`;

export const Banner = styled.div`
    background-color: ${({ theme }) => darken(0.05, theme.colors.gray)};
    border-radius: 12px;
    height: 350px;
    display: grid;
    place-items: center;
    text-align: center;
    line-height: 21px;
    color: #18435a;
`;

export const BannerImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 12px;
    cursor: pointer;
`;

export const HotlinksHeading = styled.div`
    font-size: ${rem(18)};
    margin-top: 38px;
`;

export const Link = styled.a`
    margin-top: 12px;
    display: block;
    color: ${({ theme }) => lighten(0.2, theme.colors.blue)};
`;
