import { action, autorun, makeObservable, observable } from 'mobx';
import User from 'domain/entity/app/User';

export default class AuthStore {
    public user: User = User.CreateEmpty();

    public message = '';

    constructor() {
        makeObservable(this, {
            user: observable,
            message: observable,
            setUser: action.bound,
            setMessage: action.bound,
        });

        autorun(() => {
            console.log('AuthStore has changed:');
            console.log('User:', this.user);
        });
    }

    public setUser(user: User) {
        this.user = user;
    }

    public setMessage(message: string) {
        this.message = message;
    }
}
