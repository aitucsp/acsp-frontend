import styled from '@emotion/styled';
import { rem } from 'polished';

type PillProps = {
    active?: boolean;
};

export const Wrapper = styled.div`
    padding: 32px 20px;
`;

export const Title = styled.h2`
    font-size: ${rem(32)};
    font-weight: ${({ theme }) => theme.font.weight.regular};
`;

export const TitleWrapper = styled.div`
    display: flex;
    gap: 12px;
`;

export const Pill = styled.button<PillProps>`
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #ffffff;
    min-width: 100px;
    border-radius: 9999px;
    background-color: ${({ active }) => (active ? '#0DA16C' : '#b6bbc8')};
    padding: 0 20px;
`;
