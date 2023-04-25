import React from 'react';
import { NextPage } from 'next';
import goIcon from 'presentation/svg/go.svg?sprite';
import chatIcon from 'presentation/svg/navbar/chat.svg?sprite';
import capIcon from 'presentation/svg/navbar/cap.svg?sprite';
// import linkArrowIcon from 'presentation/svg/navbar/link-arrow.svg?sprite';
import backpackIcon from 'presentation/svg/navbar/backpack.svg?sprite';
import studentsIcon from 'presentation/svg/navbar/students.svg?sprite';
// import trophyIcon from 'presentation/svg/navbar/trophy.svg?sprite';
import DashboardLayout from 'presentation/component/layout/DashboardLayout';
import Button from 'presentation/component/common/control/Button';
import {
    Card,
    CardGrid,
    CardHeading,
    CardIcon,
    customButtonCss,
    Description,
    Left,
    Right,
    Subtitle,
    Title,
    Wrapper,
} from './styles';

const DashboardPage: NextPage = () => {
    return (
        <DashboardLayout>
            <Wrapper>
                <Title>Welcome to EZE!</Title>
                <Description>
                    We are glad to welcome you on this portal! You have embarked on the right path
                    to get not only good grades, but also quality knowledge. Solve practical tasks
                    in different disciplines. Take courses from top AITU students. Communicate in a
                    chat not only with your parallel, but also with students of all 3 courses. Ask
                    questions and answer other forum members. Raise your rank on the portal. Get
                    recognized among 2500+ AITU students. Publish your articles and observations.
                    Place ads on your events or works. Participate in free and paid events. Pay for
                    courses and events directly on the site. Earn money by teaching others. Good
                    luck in everything!
                </Description>
                <CardGrid>
                    <Card color="#18435a">
                        <Left>
                            <CardHeading>Edit profile</CardHeading>
                            <Subtitle>Start by editing your profile</Subtitle>
                        </Left>
                        <Right>
                            <CardIcon icon={goIcon} />
                        </Right>
                    </Card>
                    <Card color="#0DA16C">
                        <Left>
                            <CardHeading>Chat!</CardHeading>
                            <Subtitle>
                                Chat with students of all courses and find common interests
                            </Subtitle>
                            <Button color="white" css={customButtonCss('#0DA16C')} size="small">
                                Let’s go
                            </Button>
                        </Left>
                        <Right>
                            <CardIcon icon={chatIcon} />
                        </Right>
                    </Card>
                    <Card color="#3E92CC">
                        <Left>
                            <CardHeading>Useful materials</CardHeading>
                            <Subtitle>
                                Write your useful articles on various topics, read and learn new
                                things for yourself
                            </Subtitle>
                            <Button color="white" css={customButtonCss('#3E92CC')} size="small">
                                Let’s go
                            </Button>
                        </Left>
                        <Right>
                            <CardIcon icon={backpackIcon} />
                        </Right>
                    </Card>
                    <Card color="#2A628F">
                        <Left>
                            <CardHeading>Forum</CardHeading>
                            <Subtitle>
                                Ask questions and get answers, answer yourself and increase your
                                rank
                            </Subtitle>
                            <Button color="white" css={customButtonCss('#2A628F')} size="small">
                                Let’s go
                            </Button>
                        </Left>
                        <Right>
                            <CardIcon icon={studentsIcon} />
                        </Right>
                    </Card>
                    <Card color="#0DA16C">
                        <Left>
                            <CardHeading>Learn!</CardHeading>
                            <Subtitle>
                                Complete practical tasks and take courses from experienced students
                            </Subtitle>
                            <Button color="white" css={customButtonCss('#0DA16C')} size="small">
                                Let’s go
                            </Button>
                        </Left>
                        <Right>
                            <CardIcon icon={capIcon} />
                        </Right>
                    </Card>
                    <Card color="#18435A">
                        <Left>
                            <CardHeading>Сontests</CardHeading>
                            <Subtitle>
                                Register and pay for events directly on the website and get a new
                                invaluable experience
                            </Subtitle>
                            <Button color="white" css={customButtonCss('#18435A')} size="small">
                                Let’s go
                            </Button>
                        </Left>
                        <Right>
                            <CardIcon icon={chatIcon} />
                        </Right>
                    </Card>
                </CardGrid>
            </Wrapper>
        </DashboardLayout>
    );
};

export default DashboardPage;
