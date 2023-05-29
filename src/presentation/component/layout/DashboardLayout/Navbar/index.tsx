import React from 'react';
import NextLink from 'next/link';
import { CONTESTS, DASHBOARD, PBL, SCHOLAR, TEAMMATES } from 'constant/route';
import logoIcon from 'presentation/svg/logo.svg?sprite';
import capIcon from 'presentation/svg/navbar/cap.svg?sprite';
import linkArrowIcon from 'presentation/svg/navbar/link-arrow.svg?sprite';
import backpackIcon from 'presentation/svg/navbar/backpack.svg?sprite';
import studentsIcon from 'presentation/svg/navbar/students.svg?sprite';
import trophyIcon from 'presentation/svg/navbar/trophy.svg?sprite';
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
            <NextLink href={DASHBOARD} passHref>
                <LogoWrapper>
                    <LogoIcon icon={logoIcon} />
                </LogoWrapper>
            </NextLink>
            <CenteredText>Menu of site</CenteredText>
            <Links>
                <NextLink href={PBL} passHref>
                    <Link>
                        <LinkIcon icon={capIcon} />
                        <LinkText>Projects and courses</LinkText>
                        <LinkArrowIcon icon={linkArrowIcon} />
                    </Link>
                </NextLink>
                <NextLink href={TEAMMATES} passHref>
                    <Link>
                        <LinkIcon icon={studentsIcon} />
                        <LinkText>Search of teammates</LinkText>
                        <LinkArrowIcon icon={linkArrowIcon} />
                    </Link>
                </NextLink>
                <NextLink href={SCHOLAR} passHref>
                    <Link href="/dashboard">
                        <LinkIcon icon={backpackIcon} />
                        <LinkText>Scholar</LinkText>
                        <LinkArrowIcon icon={linkArrowIcon} />
                    </Link>
                </NextLink>
                <NextLink href={CONTESTS} passHref>
                    <Link>
                        <LinkIcon icon={trophyIcon} />
                        <LinkText>Contests</LinkText>
                        <LinkArrowIcon icon={linkArrowIcon} />
                    </Link>
                </NextLink>
            </Links>
            <CenteredText>My courses</CenteredText>
            <NoCourseText>
                You don&#39;t have any <br /> courses added yet
            </NoCourseText>
        </Wrapper>
    );
};

export default Navbar;
