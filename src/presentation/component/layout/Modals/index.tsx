import React from 'react';
import SignInModal from 'presentation/component/layout/Modals/SignInModal';
import SignUpModal from 'presentation/component/layout/Modals/SignUpModal';
import CreateSearchOfTeammateModal from 'presentation/component/layout/Modals/CreateSearhOfTeammateModal';

const Modals = () => {
    return (
        <>
            <SignInModal />
            <SignUpModal />
            <CreateSearchOfTeammateModal />
        </>
    );
};

export default Modals;
