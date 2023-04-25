import React, { FC } from 'react';
import { HOME } from 'constant/route';
import { Link, Title, Wrapper } from './styles';

const PrivatePage: FC = () => {
    return (
        <Wrapper>
            <Title>Access closed</Title>
            <Link href={HOME}>Go to home page</Link>
        </Wrapper>
    );
};

export default PrivatePage;
