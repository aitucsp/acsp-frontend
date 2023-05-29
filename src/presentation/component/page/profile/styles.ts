import styled from '@emotion/styled';
import { rem } from 'polished';

export const Wrapper = styled.div`
    padding: 32px 20px;
`;

export const Title = styled.h2`
    font-size: ${rem(32)};
    font-weight: ${({ theme }) => theme.font.weight.regular};
`;

export const TopWrapper = styled.div`
    display: grid;
    grid-template-columns: 130px 1fr;
    gap: 30px;
    align-items: center;
`;

export const Avatar = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 50%;
    object-fit: cover;
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: fit-content;
`;

export const Name = styled.h3`
    font-weight: 800;
    font-size: 24px;
    color: #13293d;
`;

export const Course = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #13293d;
`;

export const AchievementsWrapper = styled.div`
    display: flex;
    gap: 30px;
`;

export const Achievement = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
export const AchievementTitle = styled.h3`
    font-weight: 800;
    font-size: 24px;
    color: #13293d;
`;

export const Item = styled.p`
    font-size: 16px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 5px;

    & span {
        font-weight: 800;
    }
`;

export const Rank = styled.div`
    background: #0da16c;
    border-radius: 12px;
    padding: 5px 13px;
    color: #fff;
    font-weight: 400;
    font-size: 26px;
    width: fit-content;
`;
