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

const SignUpModal = observer(() => {
    const { isSignUpModalOpened, handleSignUpModalClose, handleSignInModalOpen } =
        useService(ModalController);
    const { handleSignUpFormSubmit, signUpMessage } = useService(AuthController);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const isError = signUpMessage !== 'Successfully signed up. Now you can sign in';

    const handleSignInClick = () => {
        handleSignUpModalClose();
        handleSignInModalOpen();
    };

    const handleSubmitClick = () => {
        handleSignUpFormSubmit(email, name, password, repeatPassword);
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
                <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Label>Name</Label>
                <Input
                    placeholder="Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Label>Password</Label>
                <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Label>Repeat password</Label>
                <Input
                    placeholder="Password"
                    type="password"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                />
                {signUpMessage && (
                    <ErrorBlock status={isError ? 'error' : 'info'}>{signUpMessage}</ErrorBlock>
                )}
                <ButtonContainer>
                    <Button color="lightblue" size="medium" onClick={handleSignInClick}>
                        Sign In
                    </Button>
                    <Button color="green" size="medium" onClick={handleSubmitClick}>
                        Sign Up
                    </Button>
                </ButtonContainer>
            </Wrapper>
        </Modal>
    );
});

export default SignUpModal;
