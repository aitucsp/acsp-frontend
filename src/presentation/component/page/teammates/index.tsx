import React from 'react';
import DashboardLayout from 'presentation/component/layout/DashboardLayout';
import Invitations from 'presentation/component/page/teammates/Invitations';
import Content from 'presentation/component/page/teammates/Content';
import { Pill, Title, TitleWrapper, Wrapper } from './styles';

const TeammatesPage = () => {
    const [activeTab, setActiveTab] = React.useState('list');

    return (
        <DashboardLayout>
            <Wrapper>
                <TitleWrapper>
                    <Title>Search of teammates</Title>
                    <Pill active={activeTab === 'list'} onClick={() => setActiveTab('list')}>
                        List
                    </Pill>
                    <Pill
                        active={activeTab === 'invitations'}
                        onClick={() => setActiveTab('invitations')}
                    >
                        Invitations
                    </Pill>
                    <Pill>Responses</Pill>
                </TitleWrapper>
                {activeTab === 'list' && <Content />}
                {activeTab === 'invitations' && <Invitations />}
            </Wrapper>
        </DashboardLayout>
    );
};

export default TeammatesPage;
