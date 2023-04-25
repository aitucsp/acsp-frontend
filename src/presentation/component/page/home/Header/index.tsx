import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import logoIcon from 'presentation/svg/logo.svg?sprite';
import loginIcon from 'presentation/svg/login.svg';
import profileIcon from 'presentation/svg/profile.svg';
import { useService } from 'presentation/context/Container';
import ModalController from 'presentation/controller/ModalController';
import Container from 'presentation/component/common/block/Container';
import Button from 'presentation/component/common/control/Button';
import {
    Buttons,
    Link,
    Links,
    LogoIcon,
    Wrapper,
} from 'presentation/component/page/home/Header/styles';

const Header: FC = observer(() => {
    const { handleSignInModalOpen, handleSignUpModalOpen } = useService(ModalController);

    return (
        <Container>
            <Wrapper>
                <LogoIcon icon={logoIcon} />
                <Links>
                    <Link href="/src/pages">For students</Link>
                    <Link href="/src/pages">About us</Link>
                    <Link href="/src/pages">Career</Link>
                    <Link href="/src/pages">Contacts</Link>
                </Links>
                <Buttons>
                    <Button
                        color="green"
                        size="medium"
                        icon={loginIcon}
                        onClick={handleSignInModalOpen}
                    >
                        Sign In
                    </Button>
                    <Button
                        color="lightblue"
                        size="medium"
                        icon={profileIcon}
                        onClick={handleSignUpModalOpen}
                    >
                        Sign Up
                    </Button>
                </Buttons>
            </Wrapper>
        </Container>
    );
});

export default Header;
