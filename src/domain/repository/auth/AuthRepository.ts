import SerializableRepository from 'framework/SerializableRepository';
import LoginResult from 'domain/entity/auth/LoginResult';

export default abstract class AuthRepository extends SerializableRepository {
    public abstract login(email: string, password: string): Promise<LoginResult>;

    public abstract logout(): void;

    public abstract getMessage(): string;

    public abstract setMessage(message: string): void;
}
