import React from 'react';
import { useService } from 'presentation/context/Container';
import AppGlobalController from 'presentation/controller/AppGlobalController';
import DashboardLayout from 'presentation/component/layout/DashboardLayout';
import {
    Achievement,
    AchievementsWrapper,
    AchievementTitle,
    Avatar,
    Course,
    InfoWrapper,
    Item,
    Name,
    Rank,
    Title,
    TopWrapper,
    Wrapper,
} from './styles';

const ProfilePage = () => {
    const { user } = useService(AppGlobalController);
    console.log(user);

    return (
        <DashboardLayout>
            <Wrapper>
                <Title>Profile</Title>
                <TopWrapper>
                    <Avatar src={`https://${user.image_url}`} />
                    <InfoWrapper>
                        <Name>{user.name}</Name>
                        <Course>3rd course</Course>
                        <Course>Specialization: {user.user_details.specialization}</Course>
                        {/* <Button color="darkblue">Send a message</Button> */}
                    </InfoWrapper>
                    <AchievementsWrapper>
                        <Achievement>
                            <AchievementTitle>Contact</AchievementTitle>
                            <Item>
                                <span>Email:</span> {user.email}
                            </Item>
                            <Item>
                                <span>Phone number:</span> {user.user_details.phone_number}
                            </Item>
                        </Achievement>
                        <Achievement>
                            <AchievementTitle>Rank</AchievementTitle>
                            <Item>
                                <Rank>0</Rank>Newbie
                            </Item>
                        </Achievement>
                    </AchievementsWrapper>
                </TopWrapper>
            </Wrapper>
        </DashboardLayout>
    );
};

export default ProfilePage;
