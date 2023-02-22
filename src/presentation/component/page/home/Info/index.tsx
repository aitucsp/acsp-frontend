import React from 'react';
import {
    Wrapper,
    ImageWrapper,
    Image,
    Heading,
    Content,
    Description,
    NumbersText,
    BoxContainer,
    Box,
    BoxHeading,
    BoxText,
} from './styles';

const Info = () => {
    return (
        <Wrapper>
            <ImageWrapper>
                <Image src="/images/landing/info-bg.png" alt="Astana IT University" />
            </ImageWrapper>
            <Content>
                <Heading>FOR STUDENTS</Heading>
                <Description>
                    <b>EZE</b> helps our students to quickly integrate into the university program,
                    as well as greatly simplifying the search for answers to their questions,
                    communication with students of various courses and registration for all possible
                    competitions. We want to be a unified system where there is everything in order
                    to create conditions for learning.
                </Description>
                <NumbersText>Our numbers:</NumbersText>
                <BoxContainer>
                    <Box color="#3e92cc">
                        <BoxHeading>50+</BoxHeading>
                        <BoxText>disciplines with their own training base</BoxText>
                    </Box>
                    <Box color="#0DA16C" grow>
                        <BoxHeading>2500+</BoxHeading>
                        <BoxText>students can be online at the same time</BoxText>
                    </Box>
                </BoxContainer>
                <BoxContainer>
                    <Box color="#2A628F" grow>
                        <BoxHeading>1500+</BoxHeading>
                        <BoxText>hours of exclusive content for AITU students</BoxText>
                    </Box>
                    <Box color="#18435A">
                        <BoxHeading>20+</BoxHeading>
                        <BoxText>paid and free courses from strong students</BoxText>
                    </Box>
                </BoxContainer>
            </Content>
        </Wrapper>
    );
};

export default Info;
