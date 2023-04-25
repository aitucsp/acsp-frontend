import styled from '@emotion/styled';
import SvgSpriteIcon from '@bit/taptima.common.svg-sprite-icon';

export const Wrapper = styled.nav`
    background-color: ${({ theme }) => theme.colors.gray};
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
`;

export const LogoIcon = styled(SvgSpriteIcon)`
    width: 50px;
`;

export const LogoWrapper = styled.a`
    display: flex;
    justify-content: center;
    margin: 24px 0;
`;

export const CenteredText = styled.span`
    text-align: center;
    display: block;
`;

export const Links = styled.ul`
    width: 100%;
    padding: 0 20px;
    margin-top: 20px;
    display: grid;
    grid-auto-flow: row;
    gap: 20px;
    margin-bottom: 30px;
`;

export const LinkIcon = styled(SvgSpriteIcon)`
    fill: #b6bbc8;
    width: 28px;
    transition: ${({ theme }) => theme.transition.fast};
`;

export const LinkArrowIcon = styled(SvgSpriteIcon)`
    fill: ${({ theme }) => theme.colors.lightblue};
    width: 20px;
    transition: ${({ theme }) => theme.transition.fast};
`;

export const Link = styled.a`
    display: grid;
    grid-template-columns: 20px 1fr 20px;
    gap: 15px;
    width: 100%;
    align-items: center;

    &:hover {
        span {
            color: ${({ theme }) => theme.colors.text};
            transition: ${({ theme }) => theme.transition.fast};
        }

        ${LinkArrowIcon} {
            transform: translateX(5px);
            transition: ${({ theme }) => theme.transition.fast};
        }

        ${LinkIcon} {
            fill: #a9acb4;
            transition: ${({ theme }) => theme.transition.fast};
        }
    }
`;

export const LinkText = styled.span`
    font-size: 14px;
    color: #b6bbc8;
`;

export const NoCourseText = styled.span`
    color: #b6bbc8;
    text-align: center;
    display: block;
    margin-top: 20px;
`;
