import styled from '@emotion/styled';
import { rem } from 'polished';
import SvgSpriteIcon from '@bit/taptima.common.svg-sprite-icon';

export const Wrapper = styled.header`
    display: grid;
    align-items: center;
    grid-template-columns: 54px 3fr fit-content(300px);
    margin-top: 36px;
`;

export const Links = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Link = styled.a`
    font-size: ${rem(16)};
    font-weight: ${({ theme }) => theme.font.weight.regular};
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
`;

export const LogoIcon = styled(SvgSpriteIcon)`
    width: 54px;
`;
