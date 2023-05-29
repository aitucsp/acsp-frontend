import UserRole from 'domain/entity/app/UserRole';

export default class User {
    constructor(
        public readonly id: number,
        public readonly role: UserRole,
        public readonly email: string,
        public readonly name: string,
        public readonly image_url: string,
        public readonly user_details: any,
    ) {}

    public static Hydrate(data: User): User {
        try {
            return new User(
                data.id || NaN,
                data.role,
                data.email,
                data.name,
                data.image_url,
                data.user_details,
            );
        } catch {
            return User.CreateEmpty();
        }
    }

    public static CreateEmpty(): User {
        return new User(NaN, UserRole.VISITOR, '', '', '', {});
    }

    public isAnonymous(): boolean {
        return this.role === UserRole.VISITOR;
    }
}
