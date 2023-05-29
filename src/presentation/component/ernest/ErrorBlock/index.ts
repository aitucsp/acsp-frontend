import styled from '@emotion/styled';
import { opacify, rem } from 'polished';

// Нужно добавить еще и информационный блок через Props
// пример: status: 'error' | 'info'
// и в зависимости от него менять цвета и иконку
// примеры можно посмотреть в других компонентах
const Wrapper = styled.div`
    padding: 10px;
    margin-top: 20px;
    border-radius: 7px;
    font-size: ${rem(14)};
    background-color: ${({ theme }) => opacify(-0.9, theme.colors.blue)};
    border: 1px solid ${({ theme }) => opacify(-0.4, theme.colors.blue)};
`;

export default Wrapper;

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
