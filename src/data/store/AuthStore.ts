import { action, makeObservable, observable } from 'mobx';
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
    }

    public setUser(user: User) {
        this.user = user;
    }

    public setMessage(message: string) {
        this.message = message;
    }
}
