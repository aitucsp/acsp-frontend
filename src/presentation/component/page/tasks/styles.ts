import styled from '@emotion/styled';
import SvgSpriteIcon from '@bit/taptima.common.svg-sprite-icon';
import { css } from '@emotion/react';

type PillProps = {
    active?: boolean;
};

export const Wrapper = styled.div`
    padding: 32px 20px;
`;

export const Title = styled.h1`
    font-size: 32px;
    color: #13293d;
    font-weight: 400;
`;

export const Pill = styled.button<PillProps>`
    font-weight: 400;
    font-size: 14px;
    color: ${({ active }) => (active ? '#fff' : '#13293D')};
    background: ${({ active }) => (active ? '#3e92cc' : '#fff')};
    box-shadow: 0 0 4px rgba(77, 77, 77, 0.25);
    border-radius: 99px;
    padding: 8px 23px;
`;

export const PillWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    gap: 10px;
`;

export const Card = styled.div`
    background: #ffffff;
    box-shadow: 0 0 4px rgba(49, 49, 49, 0.25);
    border-radius: 12px;
    padding: 20px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 30px;
    gap: 20px;
`;

export const LearningText = styled.p`
    font-weight: 400;
    font-size: 12px;
    color: #b6bbc8;
`;

export const CardTitle = styled.h2`
    font-weight: 600;
    font-size: 22px;
    color: #13293d;
    margin-top: 10px;
`;

export const BadgeWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const BadgeIcon = styled(SvgSpriteIcon)`
    width: 22px;
    margin-right: 5px;
`;

export const BadgeTitle = styled.p`
    font-weight: 400;
    font-size: 12px;
    color: #13293d;
    margin-right: 20px;
`;

export const Text = styled.p`
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: #13293d;
    margin-top: 20px;
`;

export const goButtonCss = css`
    min-width: 120px;
    margin-top: 10px;
`;
