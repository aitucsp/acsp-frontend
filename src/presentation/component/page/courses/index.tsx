import React from 'react';
import NextLink from 'next/link';
import { COURSES_DETAIL } from 'constant/route';
import DashboardLayout from 'presentation/component/layout/DashboardLayout';
import Button from 'presentation/component/common/control/Button';
import { Badge, BadgeGroup } from 'presentation/component/page/articles/styles';
import {
    Author,
    BottomWrapper,
    Card,
    CardTitle,
    Evaluation,
    Grid,
    Percentage,
    SearchBar,
    Subtitle,
    Title,
    Wrapper,
} from './styles';

const CoursesPage = () => {
    return (
        <DashboardLayout>
            <Wrapper>
                <BadgeGroup>
                    <Title>Courses</Title>
                    <Badge active>Free</Badge>
                    <Badge>Paid</Badge>
                </BadgeGroup>
                <Subtitle>Choose the course you want to take</Subtitle>
                <SearchBar type="text" placeholder="Java, С++, English, Kazakh" />
                <Grid>
                    <Card>
                        <CardTitle>Java Language</CardTitle>
                        <Author>Nursultan Yerezhepov</Author>
                        <BottomWrapper>
                            <Evaluation>
                                <Author>Course evaluation</Author>
                                <Percentage>92.8%</Percentage>
                            </Evaluation>
                            <NextLink href={COURSES_DETAIL(1)}>
                                <Button color="white">Learn more</Button>
                            </NextLink>
                        </BottomWrapper>
                    </Card>
                    <Card>
                        <CardTitle>Java Language</CardTitle>
                        <Author>Nursultan Yerezhepov</Author>
                        <BottomWrapper>
                            <Evaluation>
                                <Author>Course evaluation</Author>
                                <Percentage>92.8%</Percentage>
                            </Evaluation>
                            <Button color="white">Learn more</Button>
                        </BottomWrapper>
                    </Card>
                    <Card>
                        <CardTitle>Java Language</CardTitle>
                        <Author>Nursultan Yerezhepov</Author>
                        <BottomWrapper>
                            <Evaluation>
                                <Author>Course evaluation</Author>
                                <Percentage>92.8%</Percentage>
                            </Evaluation>
                            <Button color="white">Learn more</Button>
                        </BottomWrapper>
                    </Card>
                    <Card>
                        <CardTitle>Java Language</CardTitle>
                        <Author>Nursultan Yerezhepov</Author>
                        <BottomWrapper>
                            <Evaluation>
                                <Author>Course evaluation</Author>
                                <Percentage>92.8%</Percentage>
                            </Evaluation>
                            <Button color="white">Learn more</Button>
                        </BottomWrapper>
                    </Card>
                </Grid>
            </Wrapper>
        </DashboardLayout>
    );
};

export default CoursesPage;
