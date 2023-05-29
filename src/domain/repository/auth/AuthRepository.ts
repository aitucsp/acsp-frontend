import SerializableRepository from 'framework/SerializableRepository';
import LoginResult from 'domain/entity/auth/LoginResult';
import SignUpResult from 'domain/entity/auth/SignUpResult';

export default abstract class AuthRepository extends SerializableRepository {
    public abstract login(email: string, password: string): Promise<LoginResult>;

    public abstract logout(): void;

    public abstract signUp(
        email: string,
        name: string,
        password: string,
        repeatedPassword: string,
    ): Promise<SignUpResult>;

    public abstract getMessage(): string;

    public abstract setMessage(message: string): void;

    public abstract getSignUpMessage(): string;

    public abstract setSignUpMessage(message: string): void;

    public abstract fetchUser(): Promise<void>;
}
