import React from 'react';
import { observer } from 'mobx-react-lite';
import { INVITE_USER } from 'constant/apiRoutes';
import ApiClient from 'data/driver/ApiClient';
import { useService } from 'presentation/context/Container';
import ModalController from 'presentation/controller/ModalController';
import Modal from 'presentation/component/common/block/Modal';
import Label from 'presentation/component/common/typography/Label';
import Input from 'presentation/component/common/control/Input';
import Button from 'presentation/component/common/control/Button';
import { submitButtonCss, Title, Wrapper } from './styles';

const InviteTeammateModal = observer(() => {
    const { isInviteTeammateModalOpened, handleInviteTeammateModalClose } =
        useService(ModalController);

    const handleSubmit = async () => {
        const api = new ApiClient();
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            await api.restWithAuthorization.post(INVITE_USER(window.inviteId));
            alert('Successfully invited');
            handleInviteTeammateModalClose();
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <Modal isOpen={isInviteTeammateModalOpened} close={handleInviteTeammateModalClose}>
            <Wrapper>
                <Title>Invite a person</Title>
                <Label>Send a message</Label>
                <Input placeholder="Write your message" />
                <Button css={submitButtonCss} onClick={handleSubmit}>
                    Send
                </Button>
            </Wrapper>
        </Modal>
    );
});

export default InviteTeammateModal;
