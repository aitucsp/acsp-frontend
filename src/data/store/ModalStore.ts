import { action, makeAutoObservable, observable } from 'mobx';
import ModalType from 'domain/entity/modal/ModalType';

export default class ModalStore {
    openModalTypes: Record<ModalType, boolean> = {
        [ModalType.SignIn]: false,
        [ModalType.SignUp]: false,
    };

    constructor() {
        makeAutoObservable(this, {
            openModalTypes: observable,
            setOpenModalType: action.bound,
        });
    }

    public setOpenModalType(modalType: ModalType, isOpen: boolean): void {
        this.openModalTypes[modalType] = isOpen;
    }
}
