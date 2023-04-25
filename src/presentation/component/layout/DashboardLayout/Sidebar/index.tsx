import React from 'react';
import { Banner, HotlinksHeading, Link, Wrapper } from './styles';

const Sidebar = () => {
    return (
        <Wrapper>
            <Banner>
                Here can be your <br /> advertising
            </Banner>
            <HotlinksHeading>Hot links</HotlinksHeading>
            <Link href="/">Career form (courses)</Link>
            <Link href="/">Career form (admin)</Link>
            <Link href="/">Portal Improvement</Link>
            <Link href="/">Instructions for paying for the course</Link>
            <Link href="/">Portal Rules</Link>
            <Link href="/">Support</Link>
        </Wrapper>
    );
};

export default Sidebar;
