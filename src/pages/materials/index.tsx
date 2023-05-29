import createPage from 'presentation/pageBuilder/createPage';
import AuthController from 'presentation/controller/AuthController';
import MaterialsPage from 'presentation/component/page/materials';

export default createPage(MaterialsPage, {
    effectCallback: async (container) => {
        const { fetchUser } = container.get(AuthController);
        await fetchUser();
    },
    withInitialProps: true,
});
