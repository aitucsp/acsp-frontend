import React from 'react';
import arrowIcon from 'presentation/svg/arrow.svg?sprite';
import {
    ArrowIcon,
    Lesson,
    LessonsWrapper,
    ModuleBox,
    ModuleNumber,
    ModuleTitle,
    ModuleWrapper,
    Results,
    TopWrapper,
    Wrapper,
} from './styles';

const Modules = () => {
    return (
        <Wrapper>
            <ModuleWrapper>
                <ModuleBox>
                    <TopWrapper>
                        <ModuleNumber>Module 1</ModuleNumber>
                        <ModuleTitle>Introduction to Java</ModuleTitle>
                    </TopWrapper>
                    <LessonsWrapper>
                        <Lesson>
                            Lesson 1. History of the Java language <ArrowIcon icon={arrowIcon} />
                        </Lesson>
                        <Lesson>
                            Lesson 1. History of the Java language <ArrowIcon icon={arrowIcon} />
                        </Lesson>
                        <Lesson>
                            Lesson 1. History of the Java language <ArrowIcon icon={arrowIcon} />
                        </Lesson>
                        <Lesson>
                            Lesson 1. History of the Java language <ArrowIcon icon={arrowIcon} />
                        </Lesson>
                    </LessonsWrapper>
                </ModuleBox>
                <Results>
                    <span>Your results</span> <br />
                    <br />
                    You will learn the basics of the Java language and its history. You will
                    understand why to study it and where it can be useful to you.
                </Results>
            </ModuleWrapper>
            <ModuleWrapper>
                <ModuleBox>
                    <TopWrapper>
                        <ModuleNumber>Module 1</ModuleNumber>
                        <ModuleTitle>Introduction to Java</ModuleTitle>
                    </TopWrapper>
                    <LessonsWrapper>
                        <Lesson>
                            Lesson 1. History of the Java language <ArrowIcon icon={arrowIcon} />
                        </Lesson>
                        <Lesson>
                            Lesson 1. History of the Java language <ArrowIcon icon={arrowIcon} />
                        </Lesson>
                        <Lesson>
                            Lesson 1. History of the Java language <ArrowIcon icon={arrowIcon} />
                        </Lesson>
                        <Lesson>
                            Lesson 1. History of the Java language <ArrowIcon icon={arrowIcon} />
                        </Lesson>
                    </LessonsWrapper>
                </ModuleBox>
                <Results>
                    <span>Your results</span> <br />
                    <br />
                    You will learn the basics of the Java language and its history. You will
                    understand why to study it and where it can be useful to you.
                </Results>
            </ModuleWrapper>
            <ModuleWrapper>
                <ModuleBox>
                    <TopWrapper>
                        <ModuleNumber>Module 1</ModuleNumber>
                        <ModuleTitle>Introduction to Java</ModuleTitle>
                    </TopWrapper>
                    <LessonsWrapper>
                        <Lesson>
                            Lesson 1. History of the Java language <ArrowIcon icon={arrowIcon} />
                        </Lesson>
                        <Lesson>
                            Lesson 1. History of the Java language <ArrowIcon icon={arrowIcon} />
                        </Lesson>
                        <Lesson>
                            Lesson 1. History of the Java language <ArrowIcon icon={arrowIcon} />
                        </Lesson>
                        <Lesson>
                            Lesson 1. History of the Java language <ArrowIcon icon={arrowIcon} />
                        </Lesson>
                    </LessonsWrapper>
                </ModuleBox>
                <Results>
                    <span>Your results</span> <br />
                    <br />
                    You will learn the basics of the Java language and its history. You will
                    understand why to study it and where it can be useful to you.
                </Results>
            </ModuleWrapper>
        </Wrapper>
    );
};

export default Modules;
