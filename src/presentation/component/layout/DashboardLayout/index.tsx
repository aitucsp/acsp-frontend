import React from 'react';
import Header from 'presentation/component/layout/DashboardLayout/Header';
import Navbar from 'presentation/component/layout/DashboardLayout/Navbar';
import Sidebar from 'presentation/component/layout/DashboardLayout/Sidebar';
import Footer from 'presentation/component/layout/DashboardLayout/Footer';
import { DashboardWrapper, MainWrapper, RightWrapper, SafeChildrenWrapper } from './styles';

type Props = {
    children: React.ReactNode;
};

const DashboardLayout: React.FC<Props> = (props) => {
    const { children } = props;

    return (
        <DashboardWrapper>
            <Navbar />
            <RightWrapper>
                <Header />
                <MainWrapper>
                    <SafeChildrenWrapper>{children}</SafeChildrenWrapper>
                    <Sidebar />
                </MainWrapper>
                <Footer />
            </RightWrapper>
        </DashboardWrapper>
    );
};

export default DashboardLayout;
