import styled from '@emotion/styled';
import { rem } from 'polished';

type BadgeProps = {
    active?: boolean;
};

export const Wrapper = styled.div`
    padding: 32px 20px;
`;

export const Title = styled.h1`
    font-size: ${rem(32)};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    margin-right: 20px;
`;

export const Badge = styled.button<BadgeProps>`
    border-radius: 9999px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.base};
    background-color: ${({ active }) => (active ? '#0DA16C' : '#B6BBC8')};
    padding: 7px 30px;
    margin-right: 10px;
    cursor: pointer;
`;

export const BadgeGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
`;
