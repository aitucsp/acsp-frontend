import styled from '@emotion/styled';
import SvgSpriteIcon from '@bit/taptima.common.svg-sprite-icon';
import { rem } from 'polished';
import { css } from '@emotion/react';

export const Wrapper = styled.div`
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    display: flex;
    gap: 20px;
    padding: 20px;
    height: 235px;
    margin-bottom: 12px;
`;

export const ImageWrapper = styled.div``;

export const Image = styled.img`
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
    width: 200px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Details = styled.div`
    display: flex;
    gap: 20px;
`;

export const DetailIcon = styled(SvgSpriteIcon)`
    width: 16px;
    fill: #b6bbc8;
`;

export const Detail = styled.div`
    display: flex;
    gap: 5px;
`;

export const DetailText = styled.div`
    font-size: 14px;
    color: #b6bbc8;
`;

export const Title = styled.h3`
    font-weight: 600;
    font-size: ${rem(20)};
    color: #000000;
`;

export const Author = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const AuthorName = styled.p``;

export const AuthorImage = styled.img`
    width: 25px;
    height: 25px;
    border-radius: 100%;
    object-fit: cover;
`;

export const Controls = styled.div`
    display: flex;
    gap: 10px;
    margin-top: auto;
    margin-bottom: 10px;
`;

export const customButtonCss = css`
    border-radius: 4px;
`;
