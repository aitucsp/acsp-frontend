import React, { InputHTMLAttributes } from 'react';
import SerializedCssT from 'presentation/type/SerializedCssT';
import { Control, Error, Wrapper } from './styles';

type Props = InputHTMLAttributes<HTMLInputElement> &
    SerializedCssT & {
        error?: string;
    };

const Input: React.FC<Props> = (props) => {
    const { error, value, css, ...restProps } = props;

    return (
        <Wrapper $css={css}>
            <Control value={value} {...restProps} />
            {error && <Error>{error}</Error>}
        </Wrapper>
    );
};

export default Input;
