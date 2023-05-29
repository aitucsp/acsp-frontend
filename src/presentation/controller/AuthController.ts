import { inject, injectable } from 'inversify';
import { NextRouter, useRouter } from 'next/router';
import { DASHBOARD } from 'constant/route';
import LoginResult from 'domain/entity/auth/LoginResult';
import ModalType from 'domain/entity/modal/ModalType';
import SignUpResult from 'domain/entity/auth/SignUpResult';
import AuthRepository from 'domain/repository/auth/AuthRepository';
import ModalRepository from 'domain/repository/modal/ModalRepository';

@injectable()
export default class AuthController {
    @inject(AuthRepository)
    private readonly authRepository!: AuthRepository;

    @inject(ModalRepository)
    private readonly modalRepository!: ModalRepository;

    private readonly router: NextRouter = useRouter();

    public get message(): string {
        return this.authRepository.getMessage();
    }

    public get signUpMessage(): string {
        return this.authRepository.getSignUpMessage();
    }

    public fetchUser = async (): Promise<any> => {
        const data = await this.authRepository.fetchUser();

        return data;
    };

    public handleLoginFormSubmit = async (email: string, password: string): Promise<void> => {
        this.authRepository.setMessage('');

        const loginResult = await this.authRepository.login(email, password);

        if (loginResult === LoginResult.SuccessfullyLoggedIn) {
            await this.router.push(DASHBOARD);
            this.modalRepository.setModalClosed(ModalType.SignIn);

            return;
        }

        if (loginResult === LoginResult.InvalidData) {
            this.authRepository.setMessage('Incorrect email or password');

            return;
        }

        if (loginResult === LoginResult.UnknownError) {
            this.authRepository.setMessage('Incorrect email or password');
        }
    };

    public handleSignUpFormSubmit = async (
        email: string,
        name: string,
        password: string,
        repeatedPassword: string,
    ): Promise<void> => {
        this.authRepository.setMessage('');
        this.authRepository.setSignUpMessage('');

        if (password !== repeatedPassword) {
            this.authRepository.setSignUpMessage('Passwords do not match');

            return;
        }

        const signUpResult = await this.authRepository.signUp(
            email,
            name,
            password,
            repeatedPassword,
        );

        if (signUpResult === SignUpResult.SuccessfullySignedUp) {
            this.authRepository.setSignUpMessage('Successfully signed up. Now you can sign in');
        }
    };

    public handleLogoutButtonClick = async (): Promise<void> => {
        await this.authRepository.logout();
        await this.router.push('/');
    };
}
