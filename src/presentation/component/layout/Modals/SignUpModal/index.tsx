import React from 'react';
import { observer } from 'mobx-react-lite';
import { useService } from 'presentation/context/Container';
import ModalController from 'presentation/controller/ModalController';
import Modal from 'presentation/component/common/block/Modal';
import Input from 'presentation/component/common/control/Input';
import Label from 'presentation/component/common/typography/Label';
import Button from 'presentation/component/common/control/Button';
import { ButtonContainer, Title, TitleWrapper, Wrapper } from './styles';

const SignUpModal = observer(() => {
    const { isSignUpModalOpened, handleSignUpModalClose, handleSignInModalOpen } =
        useService(ModalController);

    const handleSignInClick = () => {
        handleSignUpModalClose();
        handleSignInModalOpen();
    };

    return (
        <Modal isOpen={isSignUpModalOpened} close={handleSignUpModalClose}>
            <Wrapper>
                <TitleWrapper>
                    <Title size={18} weight="bold" color="text">
                        Sign Up
                    </Title>
                </TitleWrapper>
                <Label>University Email</Label>
                <Input placeholder="Email" type="email" />

                <Label>Password</Label>
                <Input placeholder="Password" type="password" />
                <Label>Repeat password</Label>
                <Input placeholder="Password" type="password" />
                <ButtonContainer>
                    <Button color="lightblue" size="medium" onClick={handleSignInClick}>
                        Sign In
                    </Button>
                    <Button color="green" size="medium">
                        Sign Up
                    </Button>
                </ButtonContainer>
            </Wrapper>
        </Modal>
    );
});

export default SignUpModal;
