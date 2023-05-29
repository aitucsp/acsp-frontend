import React from 'react';
import NextImage from 'next/image';
import checkIcon from 'presentation/svg/check-circle.svg';
import notepadIcon from 'presentation/svg/notepad.svg';
import career1 from 'presentation/image/landing/career/career1.png';
import career2 from 'presentation/image/landing/career/career2.png';
import Button from 'presentation/component/common/control/Button';
import Container from 'presentation/component/common/block/Container';
import {
    CheckIcon,
    CheckList,
    CheckText,
    Content,
    Heading,
    ImageBlock,
    SubHeading,
    submitButtonCss,
    Text,
    Wrapper,
} from './styles';

const Career = () => {
    return (
        <Container id="career">
            <Wrapper>
                <ImageBlock>
                    <NextImage src={career1} width={510} height={281} quality={100} />
                    <NextImage src={career2} width={510} height={281} quality={100} />
                </ImageBlock>
                <Content>
                    <Heading>
                        <span>C</span>areer
                    </Heading>
                    <Text>
                        The best students will have the opportunity to work and earn money. Here you
                        can post your courses and recruit people for your courses. Younger students
                        directly gain experience and knowledge from cool and experienced students.
                    </Text>
                    <SubHeading>Advantages</SubHeading>
                    <CheckList>
                        <CheckIcon icon={checkIcon} />
                        <CheckText>Get invaluable work and teaching experience</CheckText>
                        <CheckIcon icon={checkIcon} />
                        <CheckText>Share experience and knowledge</CheckText>
                        <CheckIcon icon={checkIcon} />
                        <CheckText>Get popular at the university</CheckText>
                        <CheckIcon icon={checkIcon} />
                        <CheckText>Flexible work schedule</CheckText>
                        <CheckIcon icon={checkIcon} />
                        <CheckText>Flexible earnings</CheckText>
                        <CheckIcon icon={checkIcon} />
                        <CheckText>Earn with us</CheckText>
                    </CheckList>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdYtR6MvTqj4DYjCowOQQszlhsw5VLJvFTz1ZE-s5YctV6PRA/viewform"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Button icon={notepadIcon} size="large" css={submitButtonCss}>
                            Submit your application
                        </Button>
                    </a>
                </Content>
            </Wrapper>
        </Container>
    );
};

export default Career;
