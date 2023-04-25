import React, { ButtonHTMLAttributes, FC } from 'react';
import { IconT } from 'presentation/type/Icon';
import SerializedCssT from 'presentation/type/SerializedCssT';
import { ColorT, Icon, SizeT, Wrapper } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
    SerializedCssT & {
        children?: React.ReactNode;
        size?: SizeT;
        color?: ColorT;
        icon?: IconT;
    };

const Button: FC<Props> = (props) => {
    const { children, size = 'medium', color = 'lightblue', icon, css, ...restProps } = props;

    return (
        <Wrapper type="button" $size={size} $color={color} $css={css} {...restProps}>
            {children}
            {icon && <Icon icon={icon} />}
        </Wrapper>
    );
};

export default Button;
