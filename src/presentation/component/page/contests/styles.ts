import styled from '@emotion/styled';
import { rem } from 'polished';
import SvgSpriteIcon from '@bit/taptima.common.svg-sprite-icon';

export const Wrapper = styled.div`
    padding: 32px 20px;
`;

export const Title = styled.h1`
    font-size: ${rem(32)};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    margin-right: 20px;
`;

export const Contest = styled.div`
    padding: 20px 16px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    position: relative;
`;

export const Grid = styled.div`
    display: grid;
    gap: 20px;
    margin-top: 20px;
`;

export const ContestTitle = styled.h2`
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    color: #13293d;
`;

export const Date = styled.div`
    font-weight: 400;
    font-size: 16px;
    color: #13293d;
    margin-top: 5px;
    margin-bottom: 10px;
`;

export const StarsIcon = styled(SvgSpriteIcon)`
    width: 60px;
    height: 60px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 200px;
`;

export const BombIcon = styled(SvgSpriteIcon)`
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 50px;
`;

export const Link = styled.a``;
