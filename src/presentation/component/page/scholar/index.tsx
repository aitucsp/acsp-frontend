import React from 'react';
import { NextPage } from 'next';
import NextLink from 'next/link';
import { ARTICLES, MATERIALS } from 'constant/route';
import goIcon from 'presentation/svg/go.svg?sprite';
// import linkArrowIcon from 'presentation/svg/navbar/link-arrow.svg?sprite';
// import trophyIcon from 'presentation/svg/navbar/trophy.svg?sprite';
import DashboardLayout from 'presentation/component/layout/DashboardLayout';
import {
    Card,
    CardGrid,
    CardHeading,
    CardIcon,
    Description,
    Left,
    Right,
    Subtitle,
    Title,
    Wrapper,
} from './styles';

const ScholarPage: NextPage = () => {
    return (
        <DashboardLayout>
            <Wrapper>
                <Title>Scholar</Title>
                <Description>
                    Read useful materials and articles written by our students. Create your own
                    content and articles. Share your learning tricks, talk about what you apply in
                    life to make it easier to study and work in useful articles. And write articles
                    on specialized topics in the field of IT and programming.
                </Description>
                <CardGrid>
                    <Card color="#3E92CC">
                        <Left>
                            <CardHeading>Materials</CardHeading>
                            <Subtitle>Share useful tricks in your studies and not only</Subtitle>
                        </Left>
                        <NextLink href={MATERIALS} passHref>
                            <Right>
                                <CardIcon icon={goIcon} />
                            </Right>
                        </NextLink>
                    </Card>
                    <Card color="#0DA16C">
                        <Left>
                            <CardHeading>Articles</CardHeading>
                            <Subtitle>
                                Write articles on specialized programming topics, teach people what
                                you have learned yourself
                            </Subtitle>
                        </Left>
                        <NextLink href={ARTICLES} passHref>
                            <Right>
                                <CardIcon icon={goIcon} />
                            </Right>
                        </NextLink>
                    </Card>
                </CardGrid>
            </Wrapper>
        </DashboardLayout>
    );
};

export default ScholarPage;
