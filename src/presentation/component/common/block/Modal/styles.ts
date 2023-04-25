import { rgba } from 'polished';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import SvgSpriteIcon from '@bit/taptima.common.svg-sprite-icon';

export const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    padding: 15px;
    text-align: center;
    top: 0;
    left: 0;
    z-index: 1000;
    overflow: auto;

    &::before {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
    }
`;

export const Overlay = styled.button`
    position: fixed;
    width: 100%;
    height: 100%;
    border: none;
    background-color: ${({ theme }) => rgba(theme.colors.text, 0.3)};
    top: 0;
    left: 0;
    overflow: auto;
    cursor: default;

    :focus {
        outline: none;
    }
`;

export const Box = styled.div`
    position: relative;
    display: inline-block;
    max-width: 1000px;
    min-width: 400px;
    background: ${({ theme }) => theme.colors.base};
    box-shadow: -3px 5px 58.5px 6.5px ${({ theme }) => rgba(theme.colors.text, 0.41)};
    text-align: initial;
    vertical-align: middle;
    overflow: hidden;
    border-radius: 20px;
    padding: 20px 30px 15px 30px;
    box-sizing: border-box;
`;

export const CloseButton = styled.button`
    cursor: pointer;
`;

export const hideBodyScrollCss = css`
    body {
        overflow: hidden;
    }
`;

export const CloseIcon = styled(SvgSpriteIcon)`
    position: absolute;
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.colors.text};
    top: 20px;
    right: 20px;
`;
