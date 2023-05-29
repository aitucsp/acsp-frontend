import createPage from 'presentation/pageBuilder/createPage';
import AuthController from 'presentation/controller/AuthController';
import MaterialPage from 'presentation/component/page/material';

export default createPage(MaterialPage, {
    effectCallback: async (container) => {
        const { fetchUser } = container.get(AuthController);
        await fetchUser();
    },
    withInitialProps: true,
});
