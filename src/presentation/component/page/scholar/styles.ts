import styled from '@emotion/styled';
import { rem } from 'polished';
import SvgSpriteIcon from '@bit/taptima.common.svg-sprite-icon';
import { css } from '@emotion/react';

type CardProps = {
    color: `#${string}`;
};

export const Wrapper = styled.div`
    padding: 32px 20px;
`;

export const Title = styled.h2`
    font-size: ${rem(32)};
    font-weight: ${({ theme }) => theme.font.weight.regular};
`;

export const Description = styled.p`
    font-weight: ${({ theme }) => theme.font.weight.regular};
    margin-top: 16px;
`;

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    margin-top: 25px;
`;

export const Card = styled.div<CardProps>`
    border-radius: 12px;
    background: ${({ color }) => color};
    padding: 40px 25px;
    color: ${({ theme }) => theme.colors.base};
    //grid-auto-rows: 1fr
    display: grid;
    grid-template-columns: 3fr 2fr;
    align-items: center;
`;

export const CardHeading = styled.h3`
    font-size: ${rem(24)};
    font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const Left = styled.div``;

export const Right = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;
`;

export const Subtitle = styled.span`
    font-size: ${rem(12)};
    line-height: 14px;
    display: block;
    margin-top: 5px;
`;

export const CardIcon = styled(SvgSpriteIcon)`
    width: 70px;
`;

export const customButtonCss = (color: `#${string}`) => css`
    color: ${color};
    font-weight: 400;
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 10px;
    font-size: ${rem(14)};
`;
