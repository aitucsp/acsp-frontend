import UserRole from 'domain/entity/app/UserRole';
import createPage from 'presentation/pageBuilder/createPage';
import DashboardPage from 'presentation/component/page/dashboard';

export default createPage(DashboardPage, {
    roles: [UserRole.ADMIN, UserRole.STUDENT, UserRole.TEACHER],
});
