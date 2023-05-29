import React from 'react';
import logoIcon from 'presentation/svg/logo.svg?sprite';
import Container from 'presentation/component/common/block/Container';
import Text from 'presentation/component/common/typography/Text';
import Button from 'presentation/component/common/control/Button';
import { Left, Link, Links, LogoIcon, Right, Wrapper } from './styles';

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <LogoIcon icon={logoIcon} />
                    <Text>
                        Making our <br /> university better
                    </Text>
                </Left>
                <Right>
                    <Links>
                        <Link href="/src/pages">Main screen</Link>
                        <Link href="/src/pages">For students</Link>
                        <Link href="/src/pages">About us</Link>
                        <Link href="/src/pages">Career</Link>
                        <Link href="/src/pages">Contacts</Link>
                    </Links>
                    <a href="https://t.me/eldos_manap" target="_blank" rel="noreferrer">
                        <Button>Support</Button>
                    </a>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Footer;
