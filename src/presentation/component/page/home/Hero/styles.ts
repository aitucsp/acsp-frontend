import styled from '@emotion/styled';
import { rem } from 'polished';
import SvgSpriteIcon from '@bit/taptima.common.svg-sprite-icon';
import { css } from '@emotion/react';
import { ThemeT } from 'presentation/context/Theme';

type ColorT = 'green' | 'lightblue' | 'blue' | 'darkblue';

type BulletIconBoxProps = {
    $color: ColorT;
};

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 6fr 5fr;
    margin-top: 40px;
`;

export const Content = styled.div``;

export const Heading = styled.h1`
    font-family: ${({ theme }) => theme.font.family.heading};
    font-weight: ${({ theme }) => theme.font.weight.black};
    font-size: ${rem(36)};
    line-height: ${rem(36)};
    max-width: 415px;
    margin-top: 20px;

    & span {
        color: ${({ theme }) => theme.colors.lightblue};
    }
`;

export const SubHeading = styled.h2`
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: ${rem(24)};
    margin-top: 10px;
    max-width: 400px;
`;

export const BulletWrapper = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px 40px;
    margin-top: 28px;
    max-width: 500px;
`;

export const Bullet = styled.li`
    display: grid;
    align-items: center;
    grid-template-columns: 48px 1fr;
    gap: 15px;
`;

export const BulletIcon = styled(SvgSpriteIcon)`
    width: 28px;
`;

const greenBoxCss = (theme: ThemeT) => css`
    background-color: ${theme.colors.green};
`;

const lightBlueBoxCss = (theme: ThemeT) => css`
    background-color: ${theme.colors.lightblue};
`;

const blueBoxCss = (theme: ThemeT) => css`
    background-color: ${theme.colors.blue};
`;

const darkBlueBoxCss = (theme: ThemeT) => css`
    background-color: ${theme.colors.text};
`;

export const BulletIconBox = styled.div<BulletIconBoxProps>`
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.base};

    ${({ $color, theme }) => $color === 'lightblue' && lightBlueBoxCss(theme)}
    ${({ $color, theme }) => $color === 'darkblue' && darkBlueBoxCss(theme)}
    ${({ $color, theme }) => $color === 'blue' && blueBoxCss(theme)}
    ${({ $color, theme }) => $color === 'green' && greenBoxCss(theme)}
`;

export const BulletText = styled.p`
    font-size: ${rem(16)};
    font-weight: ${({ theme }) => theme.font.weight.regular};
`;

export const Buttons = styled.div`
    margin-top: 24px;
    display: flex;
    gap: 24px;
`;

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 410px;
    position: relative;
`;

export const Image = styled.img`
    position: absolute;
    height: 470px;
    left: 0;
`;
