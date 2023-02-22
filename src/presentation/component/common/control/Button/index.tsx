import React, { ButtonHTMLAttributes, FC } from 'react';
import { IconT } from 'presentation/type/Icon';
import { ColorT, SizeT, Wrapper, Icon } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode;
    size?: SizeT;
    color?: ColorT;
    icon?: IconT;
};

const Button: FC<Props> = (props) => {
    const { children, size = 'medium', color = 'lightblue', icon } = props;

    return (
        <Wrapper type="button" $size={size} $color={color}>
            {children}
            {icon && <Icon icon={icon} />}
        </Wrapper>
    );
};

export default Button;
