import React from 'react';
import NextLink from 'next/link';
import { ARTICLES, HOME, TASKS } from 'constant/route';
import logoIcon from 'presentation/svg/logo.svg?sprite';
import capIcon from 'presentation/svg/navbar/cap.svg?sprite';
import linkArrowIcon from 'presentation/svg/navbar/link-arrow.svg?sprite';
import backpackIcon from 'presentation/svg/navbar/backpack.svg?sprite';
import studentsIcon from 'presentation/svg/navbar/students.svg?sprite';
import trophyIcon from 'presentation/svg/navbar/trophy.svg?sprite';
import chatIcon from 'presentation/svg/navbar/chat.svg?sprite';
import {
    CenteredText,
    Link,
    LinkArrowIcon,
    LinkIcon,
    Links,
    LinkText,
    LogoIcon,
    LogoWrapper,
    NoCourseText,
    Wrapper,
} from 'presentation/component/layout/DashboardLayout/Navbar/styles';

const Navbar = () => {
    return (
        <Wrapper>
            <NextLink href={HOME} passHref>
                <LogoWrapper>
                    <LogoIcon icon={logoIcon} />
                </LogoWrapper>
            </NextLink>
            <CenteredText>Menu of site</CenteredText>
            <Links>
                <NextLink href={TASKS} passHref>
                    <Link href="/dashboard">
                        <LinkIcon icon={capIcon} />
                        <LinkText>Program-Based Learning</LinkText>
                        <LinkArrowIcon icon={linkArrowIcon} />
                    </Link>
                </NextLink>
                <Link href="/dashboard">
                    <LinkIcon icon={studentsIcon} />
                    <LinkText>Students Forum</LinkText>
                    <LinkArrowIcon icon={linkArrowIcon} />
                </Link>
                <NextLink href={ARTICLES} passHref>
                    <Link href="/dashboard">
                        <LinkIcon icon={backpackIcon} />
                        <LinkText>Materials/Articles</LinkText>
                        <LinkArrowIcon icon={linkArrowIcon} />
                    </Link>
                </NextLink>
                <Link href="/dashboard">
                    <LinkIcon icon={trophyIcon} />
                    <LinkText>Contests</LinkText>
                    <LinkArrowIcon icon={linkArrowIcon} />
                </Link>
                <Link href="/dashboard">
                    <LinkIcon icon={chatIcon} />
                    <LinkText>Chat</LinkText>
                    <LinkArrowIcon icon={linkArrowIcon} />
                </Link>
            </Links>
            <CenteredText>My courses</CenteredText>
            <NoCourseText>
                You don&#39;t have any <br /> courses added yet
            </NoCourseText>
        </Wrapper>
    );
};

export default Navbar;
