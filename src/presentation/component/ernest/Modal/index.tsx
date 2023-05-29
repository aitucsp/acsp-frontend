import React, { MouseEventHandler } from 'react';
import { Global } from '@emotion/react';
import crossIcon from 'presentation/svg/cross.svg?sprite';
import { Box, CloseButton, CloseIcon, hideBodyScrollCss, Overlay, Wrapper } from './styles';

type PropsT = {
    isOpen: boolean;
    close: MouseEventHandler<HTMLButtonElement>;
};
// Универсальное модальное окно с заменяющимся контентов
const Modal: React.FC<PropsT> = (props) => {
    const { isOpen, close, children } = props;

    return (
        <Wrapper>
            <Global styles={hideBodyScrollCss} />
            <Overlay type="button" onClick={close} />
            <Box>
                {children}
                <CloseButton onClick={close}>
                    <CloseIcon icon={crossIcon} />
                </CloseButton>
            </Box>
        </Wrapper>
    );
};

// Модалка показывается даже если isOpen = false
// При клике на Overlay или CloseButton должен вызываться close
// Внутри Box должен быть children

export default Modal;
