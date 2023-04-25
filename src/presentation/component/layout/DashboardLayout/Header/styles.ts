import styled from '@emotion/styled';
import { rem } from 'polished';
import SvgSpriteIcon from '@bit/taptima.common.svg-sprite-icon';

export const Wrapper = styled.header`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 4px rgba(95, 95, 95, 0.25);
    padding: 0 20px;
`;

export const Title = styled.h1`
    font-size: ${rem(20)};
    font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const Name = styled.span`
    font-size: ${rem(16)};
    font-weight: ${({ theme }) => theme.font.weight.regular};
`;

export const Description = styled.span`
    font-size: ${rem(12)};
    color: #b6bbc8;
`;

export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
`;

export const Dropdown = styled(SvgSpriteIcon)`
    width: 20px;
    height: 20px;
    transform: rotate(90deg);
    cursor: pointer;
`;
