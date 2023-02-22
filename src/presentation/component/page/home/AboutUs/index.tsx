import React from 'react';
import Container from 'presentation/component/common/block/Container';
import {
    AboutText,
    Column,
    Content,
    Grid,
    Heading,
    InfoWrapper,
    Logo,
    Member,
    MemberAvatar,
    Name,
    NameWrapper,
    OurTeam,
    Professionals,
    Quote,
    Specialization,
    Stack,
    StackText,
    Technology,
    Title,
    Wrapper,
} from './styles';

const AboutUs = () => {
    return (
        <Container>
            <Wrapper>
                <Content>
                    <Heading>
                        <span>A</span>bout Us
                    </Heading>
                    <AboutText>
                        We are simple students from AITU who decided to create a single space for
                        independent study of each student. We ourselves faced the lack of such a
                        space where we could share experience and knowledge with other students and
                        help each other.
                    </AboutText>
                    <OurTeam>Our team</OurTeam>
                    <Professionals>
                        3 PROFESSIONALS <br /> IN THEIR FIELDS
                    </Professionals>
                    <Quote>
                        «A strong and friendly team is the key to the success of any project. Cool
                        vibe within the team, warm relationships and an environment in which you
                        want to work. »
                    </Quote>
                </Content>
                <Member>
                    <InfoWrapper>
                        <MemberAvatar src="/images/landing/eldos.png" alt="Eldos" />
                        <NameWrapper>
                            <Name>Eldos Manap</Name>
                            <Specialization>Back-end developer</Specialization>
                        </NameWrapper>
                    </InfoWrapper>
                    <Grid>
                        <Column>
                            <StackText>
                                <span>Tech</span>
                                <br />
                                Stack
                            </StackText>
                            <Stack>
                                <Title>Logging</Title>
                                <Technology>
                                    <Logo src="/images/landing/stack/zap.svg" alt="Zap" />
                                    Zap
                                </Technology>
                            </Stack>
                            <Stack>
                                <Title>Containers</Title>
                                <Technology>
                                    <Logo src="/images/landing/stack/docker.svg" alt="Docker" />
                                    Docker
                                </Technology>
                                <Technology>
                                    <Logo
                                        src="/images/landing/stack/kubernetes.svg"
                                        alt="Kubernetes"
                                    />
                                    Kubernetes
                                </Technology>
                            </Stack>
                        </Column>
                        <Column>
                            <Stack>
                                <Title>Testing</Title>
                                <Technology>
                                    <Logo src="/images/landing/stack/layer.svg" alt="Testify" />
                                    Testify
                                </Technology>
                                <Technology>
                                    <Logo src="/images/landing/stack/layer.svg" alt="GoMock" />
                                    GoMock
                                </Technology>
                                <Technology>
                                    <Logo src="/images/landing/stack/layer.svg" alt="GoConvey" />
                                    GoConvey
                                </Technology>
                            </Stack>
                            <Stack>
                                <Title>Engine</Title>
                                <Technology>
                                    <Logo src="/images/landing/stack/golang.png" alt="Golang" />
                                    Golang
                                </Technology>
                                <Technology>
                                    <Logo src="/images/landing/stack/rest.svg" alt="Rest" />
                                    REST
                                </Technology>
                            </Stack>
                        </Column>
                        <Column>
                            <Stack>
                                <Title>Web framework</Title>
                                <Technology>
                                    <Logo src="/images/landing/stack/fiber.svg" alt="Fiber" />
                                    Fiber
                                </Technology>
                            </Stack>
                            <Stack>
                                <Title>Messaging</Title>
                                <Technology>
                                    <Logo src="/images/landing/stack/kafka.png" alt="Kafka" />
                                    Kafka
                                </Technology>
                            </Stack>
                            <Stack>
                                <Title>Database</Title>
                                <Technology>
                                    <Logo src="/images/landing/stack/mongodb.png" alt="MongoDB" />
                                    MongoDB
                                </Technology>
                            </Stack>
                        </Column>
                    </Grid>
                </Member>
            </Wrapper>
        </Container>
    );
};

export default AboutUs;
