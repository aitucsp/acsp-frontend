import React from 'react';
import { observer } from 'mobx-react-lite';
import { useService } from 'presentation/context/Container';
import ModalController from 'presentation/controller/ModalController';
import Modal from 'presentation/component/common/block/Modal';
import { Wrapper } from './styles';

const YouTubeModal = observer(() => {
    const { isVideoModalOpened, handleVideoModalClose } = useService(ModalController);

    return (
        <Modal isOpen={isVideoModalOpened} close={handleVideoModalClose}>
            <Wrapper>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/J1dpXuH15Lw"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </Wrapper>
        </Modal>
    );
});

export default YouTubeModal;
