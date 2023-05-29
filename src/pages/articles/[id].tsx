import createPage from 'presentation/pageBuilder/createPage';
import AuthController from 'presentation/controller/AuthController';
import ArticlePage from 'presentation/component/page/article';

export default createPage(ArticlePage, {
    effectCallback: async (container) => {
        const { fetchUser } = container.get(AuthController);
        await fetchUser();
    },
    withInitialProps: true,
});
