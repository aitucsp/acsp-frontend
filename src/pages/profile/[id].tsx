import createPage from 'presentation/pageBuilder/createPage';
import AuthController from 'presentation/controller/AuthController';
import ProfilePage from 'presentation/component/page/profile';

export default createPage(ProfilePage, {
    effectCallback: async (container) => {
        const { fetchUser } = container.get(AuthController);
        await fetchUser();
    },
    withInitialProps: true,
});
