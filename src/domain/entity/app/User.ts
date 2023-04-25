import UserRole from 'domain/entity/app/UserRole';

export default class User {
    constructor(public readonly id: number, public readonly role: UserRole) {}

    public static Hydrate(data: User): User {
        try {
            return new User(data.id || NaN, data.role);
        } catch {
            return User.CreateEmpty();
        }
    }

    public static CreateEmpty(): User {
        return new User(NaN, UserRole.VISITOR);
    }

    public isAnonymous(): boolean {
        return this.role === UserRole.VISITOR;
    }
}
