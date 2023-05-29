import React from 'react';
import SignInModal from 'presentation/component/layout/Modals/SignInModal';
import SignUpModal from 'presentation/component/layout/Modals/SignUpModal';
import CreateSearchOfTeammateModal from 'presentation/component/layout/Modals/CreateSearhOfTeammateModal';
import InviteTeammateModal from 'presentation/component/layout/Modals/InviteTeammateModal';
import YouTubeModal from 'presentation/component/layout/Modals/YouTubeModal';

const Modals = () => {
    return (
        <>
            <SignInModal />
            <SignUpModal />
            <CreateSearchOfTeammateModal />
            <InviteTeammateModal />
            <YouTubeModal />
        </>
    );
};

export default Modals;
