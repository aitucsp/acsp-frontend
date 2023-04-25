import ModalType from 'domain/entity/modal/ModalType';
import ModalRepository from 'domain/repository/modal/ModalRepository';
import ModalStore from 'data/store/ModalStore';

export default class ModalRepositoryImpl extends ModalRepository {
    private store = new ModalStore();

    public setModalOpened = (modal: ModalType): void => {
        this.store.setOpenModalType(modal, true);
    };

    public setModalClosed(modal: ModalType): void {
        this.store.setOpenModalType(modal, false);
    }

    public getModalOpenedByType(modal: ModalType): boolean {
        return this.store.openModalTypes[modal];
    }

    // eslint-disable-next-line class-methods-use-this
    hydrate(): void {}

    serialize(): Record<string, unknown> {
        return {
            openModalTypes: this.store.openModalTypes,
        };
    }
}
