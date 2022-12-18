import styled from '@emotion/styled';
import { lighten, rem, rgba } from 'polished';
import { css } from '@emotion/react';
import { ThemeT } from 'presentation/context/Theme';

export type SizeT = 'small' | 'medium' | 'large';
export type ColorT = 'green' | 'lightblue' | 'darkblue';

type Props = {
    $size: SizeT;
    $color: ColorT;
};

const greenColorCss = (theme: ThemeT) => css`
    background-color: ${theme.colors.green};
    color: ${theme.colors.base};

    &:hover {
        background-color: ${lighten(0.05, theme.colors.green)};
    }

    &:focus {
        box-shadow: 0 5px 16px 0 ${rgba('#000', 0.16)}, 0 0 0 3px ${rgba(theme.colors.green, 0.3)};
    }
`;

const lightBlueColorCss = (theme: ThemeT) => css`
    background-color: ${theme.colors.lightblue};
    color: ${theme.colors.base};

    &:hover {
        background-color: ${lighten(0.05, theme.colors.lightblue)};
    }

    &:focus {
        box-shadow: 0 5px 16px 0 ${rgba('#000', 0.16)},
            0 0 0 3px ${rgba(theme.colors.lightblue, 0.3)};
    }
`;

const darkBlueColorCss = (theme: ThemeT) => css`
    background-color: ${theme.colors.blue};
    color: ${theme.colors.base};

    &:hover {
        background-color: ${lighten(0.05, theme.colors.blue)};
    }

    &:focus {
        box-shadow: 0 5px 16px 0 ${rgba('#000', 0.16)}, 0 0 0 3px ${rgba(theme.colors.blue, 0.3)};
    }
`;

const smallSizeCss = css`
    padding: 10px 16px;
`;

const mediumSizeCss = css`
    padding: 12px 18px;
`;

const largeSizeCss = css`
    padding: 23px 43px;
`;

export const Wrapper = styled.button<Props>`
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${rem(18)};
    border-radius: 10px;
    transition: ${({ theme }) => theme.transition.fast};

    &:focus {
        outline: 0;
    }

    ${({ $color, theme }) => $color === 'green' && greenColorCss(theme)}
    ${({ $color, theme }) => $color === 'lightblue' && lightBlueColorCss(theme)}
    ${({ $color, theme }) => $color === 'darkblue' && darkBlueColorCss(theme)}
    
    ${({ $size }) => $size === 'small' && smallSizeCss}
    ${({ $size }) => $size === 'medium' && mediumSizeCss}
    ${({ $size }) => $size === 'large' && largeSizeCss}
`;
