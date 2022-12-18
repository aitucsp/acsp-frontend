import React, { ButtonHTMLAttributes, FC } from 'react';
import { ColorT, SizeT, Wrapper } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode;
    size?: SizeT;
    color?: ColorT;
};

const Button: FC<Props> = (props) => {
    const { children, size = 'medium', color = 'lightblue' } = props;

    return (
        <Wrapper type="button" $size={size} $color={color}>
            {children}
        </Wrapper>
    );
};

export default Button;
