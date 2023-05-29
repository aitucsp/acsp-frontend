import styled from '@emotion/styled';
import { opacify, rem } from 'polished';
import { css, SerializedStyles } from '@emotion/react';
import { ThemeT } from 'presentation/context/Theme';

type Props = {
    status: 'error' | 'info';
};

const errorCss = (theme: ThemeT): SerializedStyles => css`
    background-color: ${opacify(-0.9, theme.colors.red)};
    border: 1px solid ${opacify(-0.4, theme.colors.red)};
`;

const infoCss = (theme: ThemeT): SerializedStyles => css`
    background-color: ${opacify(-0.9, theme.colors.blue)};
    border: 1px solid ${opacify(-0.4, theme.colors.blue)};
`;

const Wrapper = styled.div<Props>`
    padding: 10px;
    margin-top: 20px;
    border-radius: 7px;
    font-size: ${rem(14)};

    ${({ status, theme }) => status === 'error' && errorCss(theme)}
    ${({ status, theme }) => status === 'info' && infoCss(theme)}
`;

export default Wrapper;
