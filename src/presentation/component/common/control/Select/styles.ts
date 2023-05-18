import styled from '@emotion/styled';
import { SerializedStyles } from '@emotion/react';
import { rgba } from 'polished';

type WrapperProps = {
    $css?: SerializedStyles;
};

export const Wrapper = styled.div<WrapperProps>`
    ${({ $css }) => $css};
`;

export const Control = styled.select`
    width: 100%;
    margin-top: 5px;
    padding: 10px 12px;
    border: none;
    border-right: 12px solid transparent;
    border-radius: 7px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1em;
    font-family: inherit;
    transition: box-shadow ${({ theme }) => theme.transition.fast} ease-in-out;
    background-color: ${({ theme }) => theme.colors.gray};

    &:focus,
    &:-webkit-autofill:focus {
        box-shadow: 0 5px 16px ${({ theme }) => rgba(theme.colors.text, 0.16)},
            0 0 0 3px ${({ theme }) => rgba(theme.colors.text, 0.3)};
        outline: 0;
    }

    &:disabled {
        border-color: ${({ theme }) => theme.colors.gray};
        opacity: 0.2;
        cursor: not-allowed;
    }
`;

export const Options = styled.option``;
