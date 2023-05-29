import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useService } from 'presentation/context/Container';
import ModalController from 'presentation/controller/ModalController';
import AuthController from 'presentation/controller/AuthController';
import Modal from 'presentation/component/common/block/Modal';
import Input from 'presentation/component/common/control/Input';
import Label from 'presentation/component/common/typography/Label';
import Button from 'presentation/component/common/control/Button';
import ErrorBlock from 'presentation/component/common/block/ErrorBlock';
import { ButtonContainer, Title, TitleWrapper, Wrapper } from './styles';

const SignInModal = observer(() => {
    const { isSignInModalOpened, handleSignInModalClose, handleSignUpModalOpen } =
        useService(ModalController);

    const { handleLoginFormSubmit, message } = useService(AuthController);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUpClick = () => {
        handleSignInModalClose();
        handleSignUpModalOpen();
    };

    return (
        <Modal isOpen={isSignInModalOpened} close={handleSignInModalClose}>
            <Wrapper>
                <TitleWrapper>
                    <Title size={18} weight="bold" color="text">
                        Sign in
                    </Title>
                </TitleWrapper>
                <Label>University Email</Label>
                <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Label>Password</Label>
                <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {message && <ErrorBlock status="error">{message}</ErrorBlock>}
                <ButtonContainer>
                    <Button color="lightblue" size="medium" onClick={handleSignUpClick}>
                        Sign Up
                    </Button>
                    <Button
                        color="green"
                        size="medium"
                        onClick={() => handleLoginFormSubmit(email, password)}
                    >
                        Sign In
                    </Button>
                </ButtonContainer>
            </Wrapper>
        </Modal>
    );
});

export default SignInModal;
