import createPage from 'presentation/pageBuilder/createPage';
import AuthController from 'presentation/controller/AuthController';
import ArticlesPage from 'presentation/component/page/articles';

export default createPage(ArticlesPage, {
    effectCallback: async (container) => {
        const { fetchUser } = container.get(AuthController);
        await fetchUser();
    },
    withInitialProps: true,
});
