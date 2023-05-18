import React, { FC, SelectHTMLAttributes } from 'react';
import SerializedCssT from 'presentation/type/SerializedCssT';
import { Control, Wrapper } from './styles';

export type OptionT = {
    value: string;
    label: string;
};

type Props = SelectHTMLAttributes<HTMLSelectElement> &
    SerializedCssT & {
        options: OptionT[];
        value?: string;
        onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    };

const Select: FC<Props> = (props) => {
    const { css, options, onChange, value, ...restProps } = props;

    return (
        <Wrapper $css={css}>
            <Control {...restProps} value={value} onChange={onChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Control>
        </Wrapper>
    );
};

export default Select;
