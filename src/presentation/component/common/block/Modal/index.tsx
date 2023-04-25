import React, { MouseEventHandler } from 'react';
import { Global } from '@emotion/react';
import crossIcon from 'presentation/svg/cross.svg?sprite';
import { Box, CloseButton, CloseIcon, hideBodyScrollCss, Overlay, Wrapper } from './styles';

type PropsT = {
    isOpen: boolean;
    close: MouseEventHandler<HTMLButtonElement>;
};

const Modal: React.FC<PropsT> = (props) => {
    const { isOpen, close, children } = props;

    if (!isOpen) {
        return null;
    }

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

export default Modal;
