import React, { FC } from 'react';
import logoIcon from 'presentation/svg/logo.svg?sprite';
import Container from 'presentation/component/common/block/Container';
import Button from 'presentation/component/common/control/Button';
import { Wrapper, Links, Link, Buttons, Inner, LogoIcon } from './styles';

const Header: FC = () => {
    return (
        <Wrapper>
            <Container>
                <Inner>
                    <LogoIcon icon={logoIcon} />
                    <Links>
                        <Link href="/">For students</Link>
                        <Link href="/">About us</Link>
                        <Link href="/">Career</Link>
                        <Link href="/">Contacts</Link>
                    </Links>
                    <Buttons>
                        <Button color="green" size="medium">
                            Sign In
                        </Button>
                        <Button color="lightblue" size="medium">
                            Sign Up
                        </Button>
                    </Buttons>
                </Inner>
            </Container>
        </Wrapper>
    );
};

export default Header;
