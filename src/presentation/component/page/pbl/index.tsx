import React from 'react';
import { NextPage } from 'next';
import NextLink from 'next/link';
import { COURSES, TASKS } from 'constant/route';
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

const PBLPage: NextPage = () => {
    return (
        <DashboardLayout>
            <Wrapper>
                <Title>Program-Based Learning</Title>
                <Description>
                    «Program Based Learning» is a section of the portal that allows students to
                    improve their knowledge in a particular area. The main advantage is that the
                    training is based on the training program of Astana IT University, which will
                    allow you to get the best grades in the future. There are similar tasks that are
                    given under the program. We put priority on the practice and self-awareness of
                    students. Here you will create real projects and take courses from the best
                    students of AITU.
                </Description>
                <CardGrid>
                    <Card color="#3E92CC">
                        <Left>
                            <CardHeading>Tasks</CardHeading>
                            <Subtitle>
                                Solve problems similar to those given at the university and learn
                                the material 2 times better
                            </Subtitle>
                        </Left>
                        <NextLink href={TASKS} passHref>
                            <Right>
                                <CardIcon icon={goIcon} />
                            </Right>
                        </NextLink>
                    </Card>
                    <Card color="#0DA16C">
                        <Left>
                            <CardHeading>Courses</CardHeading>
                            <Subtitle>
                                Sign up for the courses of the best students of AITU, get support
                                and assistance throughout the academic year
                            </Subtitle>
                        </Left>
                        <NextLink href={COURSES}>
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

export default PBLPage;
