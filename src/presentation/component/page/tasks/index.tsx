import React from 'react';
import { NextPage } from 'next';
import cubeIcon from 'presentation/svg/cube.svg?sprite';
import timeIcon from 'presentation/svg/time.svg?sprite';
import DashboardLayout from 'presentation/component/layout/DashboardLayout';
import Button from 'presentation/component/common/control/Button';
import {
    BadgeIcon,
    BadgeTitle,
    BadgeWrapper,
    Card,
    CardTitle,
    goButtonCss,
    Grid,
    LearningText,
    Pill,
    PillWrapper,
    Text,
    Title,
    Wrapper,
} from './styles';

const TasksPage: NextPage = () => {
    return (
        <DashboardLayout>
            <Wrapper>
                <Title>Project-Based Learning</Title>
                <PillWrapper>
                    <Pill active>All</Pill>
                    <Pill>Java</Pill>
                    <Pill>Kotlin</Pill>
                    <Pill>Python</Pill>
                    <Pill>JavaScript</Pill>
                </PillWrapper>
                <Grid>
                    <Card>
                        <LearningText>456 people already learning</LearningText>
                        <CardTitle>Java Back-end Developer</CardTitle>
                        <BadgeWrapper>
                            <BadgeIcon icon={cubeIcon} />
                            <BadgeTitle>21 projects</BadgeTitle>
                            <BadgeIcon icon={timeIcon} />
                            <BadgeTitle>756 hours of work</BadgeTitle>
                        </BadgeWrapper>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                            ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                            massa...
                        </Text>
                        <Button color="lightblue" css={goButtonCss}>
                            Go
                        </Button>
                    </Card>
                    <Card>
                        <LearningText>456 people already learning</LearningText>
                        <CardTitle>Java Back-end Developer</CardTitle>
                        <BadgeWrapper>
                            <BadgeIcon icon={cubeIcon} />
                            <BadgeTitle>21 projects</BadgeTitle>
                            <BadgeIcon icon={timeIcon} />
                            <BadgeTitle>756 hours of work</BadgeTitle>
                        </BadgeWrapper>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                            ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                            massa...
                        </Text>
                        <Button color="lightblue" css={goButtonCss}>
                            Go
                        </Button>
                    </Card>
                    <Card>
                        <LearningText>456 people already learning</LearningText>
                        <CardTitle>Java Back-end Developer</CardTitle>
                        <BadgeWrapper>
                            <BadgeIcon icon={cubeIcon} />
                            <BadgeTitle>21 projects</BadgeTitle>
                            <BadgeIcon icon={timeIcon} />
                            <BadgeTitle>756 hours of work</BadgeTitle>
                        </BadgeWrapper>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                            ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                            massa...
                        </Text>
                        <Button color="lightblue" css={goButtonCss}>
                            Go
                        </Button>
                    </Card>
                    <Card>
                        <LearningText>456 people already learning</LearningText>
                        <CardTitle>Java Back-end Developer</CardTitle>
                        <BadgeWrapper>
                            <BadgeIcon icon={cubeIcon} />
                            <BadgeTitle>21 projects</BadgeTitle>
                            <BadgeIcon icon={timeIcon} />
                            <BadgeTitle>756 hours of work</BadgeTitle>
                        </BadgeWrapper>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                            ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                            massa...
                        </Text>
                        <Button color="lightblue" css={goButtonCss}>
                            Go
                        </Button>
                    </Card>
                    <Card>
                        <LearningText>456 people already learning</LearningText>
                        <CardTitle>Java Back-end Developer</CardTitle>
                        <BadgeWrapper>
                            <BadgeIcon icon={cubeIcon} />
                            <BadgeTitle>21 projects</BadgeTitle>
                            <BadgeIcon icon={timeIcon} />
                            <BadgeTitle>756 hours of work</BadgeTitle>
                        </BadgeWrapper>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                            ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                            massa...
                        </Text>
                        <Button color="lightblue" css={goButtonCss}>
                            Go
                        </Button>
                    </Card>
                    <Card>
                        <LearningText>456 people already learning</LearningText>
                        <CardTitle>Java Back-end Developer</CardTitle>
                        <BadgeWrapper>
                            <BadgeIcon icon={cubeIcon} />
                            <BadgeTitle>21 projects</BadgeTitle>
                            <BadgeIcon icon={timeIcon} />
                            <BadgeTitle>756 hours of work</BadgeTitle>
                        </BadgeWrapper>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                            ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                            massa...
                        </Text>
                        <Button color="lightblue" css={goButtonCss}>
                            Go
                        </Button>
                    </Card>
                    <Card>
                        <LearningText>456 people already learning</LearningText>
                        <CardTitle>Java Back-end Developer</CardTitle>
                        <BadgeWrapper>
                            <BadgeIcon icon={cubeIcon} />
                            <BadgeTitle>21 projects</BadgeTitle>
                            <BadgeIcon icon={timeIcon} />
                            <BadgeTitle>756 hours of work</BadgeTitle>
                        </BadgeWrapper>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                            ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                            massa...
                        </Text>
                        <Button color="lightblue" css={goButtonCss}>
                            Go
                        </Button>
                    </Card>
                </Grid>
            </Wrapper>
        </DashboardLayout>
    );
};

export default TasksPage;
