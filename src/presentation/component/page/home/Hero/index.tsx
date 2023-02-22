import { FC } from 'react';
import studentIcon from 'presentation/svg/student.svg';
import megaphoneIcon from 'presentation/svg/megaphone.svg';
import studentCapIcon from 'presentation/svg/student-cap.svg';
import medalIcon from 'presentation/svg/medal.svg';
import eyeIcon from 'presentation/svg/eye.svg';
import Container from 'presentation/component/common/block/Container';
import Button from 'presentation/component/common/control/Button';
import {
    Content,
    Heading,
    Wrapper,
    SubHeading,
    Bullet,
    BulletWrapper,
    BulletIcon,
    BulletIconBox,
    BulletText,
    Buttons,
    Image,
    ImageWrapper,
} from './styles';

const Hero: FC = () => {
    return (
        <Container>
            <Wrapper>
                <Content>
                    <Heading>
                        Corporate <span>self-learning portal</span> based on Astana IT University
                    </Heading>
                    <SubHeading>
                        We create conditions for quality education of our students
                    </SubHeading>
                    <BulletWrapper>
                        <Bullet>
                            <BulletIconBox $color="lightblue">
                                <BulletIcon icon={studentIcon} />
                            </BulletIconBox>
                            <BulletText>Get help from experienced students</BulletText>
                        </Bullet>
                        <Bullet>
                            <BulletIconBox $color="blue">
                                <BulletIcon icon={megaphoneIcon} />
                            </BulletIconBox>
                            <BulletText>Read useful articles by students</BulletText>
                        </Bullet>
                        <Bullet>
                            <BulletIconBox $color="green">
                                <BulletIcon icon={studentCapIcon} />
                            </BulletIconBox>
                            <BulletText>Study on the basis of the university program</BulletText>
                        </Bullet>
                        <Bullet>
                            <BulletIconBox $color="darkblue">
                                <BulletIcon icon={medalIcon} />
                            </BulletIconBox>
                            <BulletText>Participate in contests</BulletText>
                        </Bullet>
                    </BulletWrapper>
                    <Buttons>
                        <Button color="lightblue" size="large">
                            LEARN MORE
                        </Button>
                        <Button color="darkblue" size="large" icon={eyeIcon}>
                            VIDEO
                        </Button>
                    </Buttons>
                </Content>
                <ImageWrapper>
                    <Image src="/images/landing/laptop.png" alt="Laptop" />
                </ImageWrapper>
            </Wrapper>
        </Container>
    );
};

export default Hero;
