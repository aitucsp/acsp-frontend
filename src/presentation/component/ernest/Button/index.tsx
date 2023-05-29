import React, { ButtonHTMLAttributes, FC } from 'react';
import SerializedCssT from 'presentation/type/SerializedCssT';
import { Icon, SizeT, Wrapper } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
    SerializedCssT & {
        children?: React.ReactNode;
        size?: SizeT;
    };
// Универсальная кнопка для всего проекта
const Button: FC<Props> = (props) => {
    const { children, size = 'medium', color = 'lightblue', css, ...restProps } = props;

    return (
        <Wrapper type="button" $size={size} {...restProps}>
            {children}
            {icon && <Icon icon={icon} />}
        </Wrapper>
    );
};

export default Button;
