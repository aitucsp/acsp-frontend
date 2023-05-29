import React from 'react';
import linkArrowIcon from 'presentation/svg/navbar/link-arrow.svg?sprite';
import { useService } from 'presentation/context/Container';
import AuthController from 'presentation/controller/AuthController';
import AppGlobalController from 'presentation/controller/AppGlobalController';
import {
    Avatar,
    Description,
    Dropdown,
    Info,
    Name,
    Title,
    UserWrapper,
    Wrapper,
} from 'presentation/component/layout/DashboardLayout/Header/styles';

const Header = () => {
    const { handleLogoutButtonClick } = useService(AuthController);
    const { user } = useService(AppGlobalController);

    return (
        <Wrapper>
            <Title>Corporate self-learning portal based on Astana IT University</Title>
            <UserWrapper>
                <Info>
                    <Name>{user.name ?? ''}</Name>
                    <Description>{user?.role?.toLowerCase() ?? ''}</Description>
                </Info>
                <Avatar src={`https://${user.image_url}`} />
                <Dropdown icon={linkArrowIcon} onClick={handleLogoutButtonClick} />
            </UserWrapper>
        </Wrapper>
    );
};

export default Header;
