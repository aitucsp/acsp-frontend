import { inject, injectable } from 'inversify';
import HttpStatusCode from 'constant/HttpStatusCode';
import { GET_PROFILE, SIGN_IN } from 'constant/apiRoutes';
import LoginResult from 'domain/entity/auth/LoginResult';
import LogoutResult from 'domain/entity/auth/LogoutResult';
import User from 'domain/entity/app/User';
import UserRole from 'domain/entity/app/UserRole';
import AuthRepository from 'domain/repository/auth/AuthRepository';
import AppRepository from 'domain/repository/app/AppRepository';
import ApiClient from 'data/driver/ApiClient';
import CredentialsResponseDTO from 'data/DTO/auth/CredentialsResponseDTO';
import AuthStore from 'data/store/AuthStore';
import AbstractApi from 'data/AbstractApiClient';
import Credentials from 'data/AbstractApiClient/Credentials';

@injectable()
export default class AuthRepositoryImpl extends AuthRepository {
    @inject(ApiClient)
    private abstractApi!: AbstractApi;

    @inject(AppRepository)
    private readonly appRepository!: AppRepository;

    private store = new AuthStore();

    public getMessage(): string {
        return this.store.message;
    }

    public setMessage(message: string): void {
        this.store.setMessage(message);
    }

    public async login(email: string, password: string): Promise<LoginResult> {
        try {
            const { data } = await this.abstractApi.rest.post<CredentialsResponseDTO>(SIGN_IN, {
                email,
                password,
            });
            const credentials = AbstractApi.decode(
                CredentialsResponseDTO,
                undefined,
                ({ access_token, refresh_token }) => new Credentials(access_token, refresh_token),
                data,
            );

            if (credentials) {
                this.abstractApi.setCredentials(credentials, true);
                this.appRepository.setUser(new User(123, UserRole.STUDENT, '', '', ''));
                this.store.setUser(new User(123, UserRole.STUDENT, '', '', ''));

                return LoginResult.SuccessfullyLoggedIn;
            }

            this.appRepository.setUser(new User(NaN, UserRole.VISITOR, '', '', ''));
            this.store.setUser(new User(NaN, UserRole.VISITOR, '', '', ''));

            return LoginResult.UnknownError;
        } catch ({ response }) {
            if (response.status === HttpStatusCode.Unauthorized || response.status === 500) {
                return LoginResult.InvalidData;
            }

            return LoginResult.UnknownError;
        }
    }

    public async fetchUser(): Promise<any> {
        const { data } = await this.abstractApi.restWithAuthorization.get(GET_PROFILE);

        // eslint-disable-next-line @typescript-eslint/naming-convention
        const { id, email, image_url, name } = data.user;

        this.appRepository.setUser(new User(id, UserRole.STUDENT, email, name, image_url));

        return data;
    }

    public async logout(): Promise<LogoutResult> {
        try {
            this.abstractApi.resetCredentials();

            return LogoutResult.SuccessfullyLoggedOut;
        } catch {
            return LogoutResult.UnknownError;
        }
    }

    // eslint-disable-next-line class-methods-use-this
    hydrate(): void {}

    serialize(): Record<string, unknown> {
        return {
            user: this.store.user,
        };
    }
}
