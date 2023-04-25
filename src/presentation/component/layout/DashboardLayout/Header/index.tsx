import React from 'react';
import linkArrowIcon from 'presentation/svg/navbar/link-arrow.svg?sprite';
import { useService } from 'presentation/context/Container';
import AuthController from 'presentation/controller/AuthController';
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

    return (
        <Wrapper>
            <Title>Corporate self-learning portal based on Astana IT University</Title>
            <UserWrapper>
                <Info>
                    <Name>Ernest Murzashev</Name>
                    <Description>Connoisseur</Description>
                </Info>
                <Avatar src="https://bsa.web.unc.edu/wp-content/uploads/sites/14595/2019/10/kushal_student_profile.jpg" />
                <Dropdown icon={linkArrowIcon} onClick={handleLogoutButtonClick} />
            </UserWrapper>
        </Wrapper>
    );
};

export default Header;
