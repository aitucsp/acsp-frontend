import styled from '@emotion/styled';
import { rem, rgba } from 'polished';
import { SerializedStyles } from '@emotion/react';

type WrapperProps = {
    $css?: SerializedStyles;
};

export const Wrapper = styled.div<WrapperProps>`
    ${({ $css }) => $css};
`;

export const Control = styled.input`
    width: 100%;
    margin-top: 5px;
    padding: 10px 12px;
    border-radius: 7px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1em;
    font-family: inherit;
    border: none;
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

export const Error = styled.p`
    margin-top: 5px;
    color: ${({ theme }) => theme.colors.red};
    font-size: ${rem(14)};
`;
