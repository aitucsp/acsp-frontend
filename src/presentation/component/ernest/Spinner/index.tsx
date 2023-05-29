import React from 'react';
import Wrapper from './styles';

// Индикатор загрузки для всех страниц
const Spinner = () => {
    return (
        <Wrapper>
            <div className="lds-roller">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </Wrapper>
    );
};

// Нужно использовать цвета из темы

export default Spinner;
