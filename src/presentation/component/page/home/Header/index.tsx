import React, { FC } from 'react';
import logoIcon from 'presentation/svg/logo.svg?sprite';
import loginIcon from 'presentation/svg/login.svg';
import profileIcon from 'presentation/svg/profile.svg';
import Container from 'presentation/component/common/block/Container';
import Button from 'presentation/component/common/control/Button';
import {
    Wrapper,
    Links,
    Link,
    Buttons,
    LogoIcon,
} from 'presentation/component/page/home/Header/styles';

const Header: FC = () => {
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
                    <Button color="green" size="medium" icon={loginIcon}>
                        Sign In
                    </Button>
                    <Button color="lightblue" size="medium" icon={profileIcon}>
                        Sign Up
                    </Button>
                </Buttons>
            </Wrapper>
        </Container>
    );
};

export default Header;
