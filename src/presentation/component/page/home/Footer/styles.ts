import styled from '@emotion/styled';
import SvgSpriteIcon from '@bit/taptima.common.svg-sprite-icon';
import { rem } from 'polished';

export const Wrapper = styled.div`
    margin: 60px 0;
    display: flex;
    justify-content: space-between;
`;

export const LogoIcon = styled(SvgSpriteIcon)`
    width: 83px;
`;

export const Left = styled.div`
    display: flex;
    gap: 40px;
    align-items: center;
`;

export const Right = styled.div`
    display: flex;
    gap: 40px;
    align-items: center;
`;

export const Links = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const Link = styled.a`
    font-size: ${rem(16)};
    font-weight: ${({ theme }) => theme.font.weight.regular};
`;
