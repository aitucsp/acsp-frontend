import React from 'react';
import DashboardLayout from 'presentation/component/layout/DashboardLayout';
import Button from 'presentation/component/common/control/Button';
import Modules from 'presentation/component/page/course/Modules';
import {
    AuthorDescription,
    AuthorImage,
    AuthorInfo,
    AuthorName,
    Header,
    reviewButtonCss,
    Skill,
    Skills,
    SkillsGrid,
    Title,
    Wrapper,
} from './styles';

const CoursePage = () => {
    return (
        <DashboardLayout>
            <Wrapper>
                <Title>Course: Java Language</Title>
                <Header>
                    <AuthorImage src="https://minervaschools-production-cms-uploads.s3.amazonaws.com/images/20150916_MNRV_220.2e16d0ba.fill-724x452.jpg?could_not_match_s3_bucket_and_object" />
                    <AuthorInfo>
                        <AuthorName>Nursultan Yerezhepov</AuthorName>
                        <AuthorDescription>
                            1st year student of AITU master&apos;s degree
                        </AuthorDescription>
                        <Button color="green" css={reviewButtonCss} size="small">
                            Read reviews
                        </Button>
                    </AuthorInfo>
                    <Skills>
                        <AuthorName>Skills:</AuthorName>
                        <SkillsGrid>
                            <Skill>Java</Skill>
                            <Skill>Java</Skill>
                            <Skill>Java</Skill>
                            <Skill>Java</Skill>
                            <Skill>Java</Skill>
                            <Skill>Java</Skill>
                            <Skill>Java</Skill>
                            <Skill>Java</Skill>
                            <Skill>Java</Skill>
                        </SkillsGrid>
                    </Skills>
                </Header>
                <Modules />
            </Wrapper>
        </DashboardLayout>
    );
};

export default CoursePage;
