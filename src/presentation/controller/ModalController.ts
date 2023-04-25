import { inject, injectable } from 'inversify';
import ModalType from 'domain/entity/modal/ModalType';
import ModalRepository from 'domain/repository/modal/ModalRepository';

@injectable()
export default class ModalController {
    @inject(ModalRepository)
    private readonly modalRepository!: ModalRepository;

    public get isSignInModalOpened(): boolean {
        return this.modalRepository.getModalOpenedByType(ModalType.SignIn);
    }

    public get isSignUpModalOpened(): boolean {
        return this.modalRepository.getModalOpenedByType(ModalType.SignUp);
    }

    public handleSignInModalOpen = (): void => {
        this.modalRepository.setModalOpened(ModalType.SignIn);
    };

    public handleSignInModalClose = (): void => {
        this.modalRepository.setModalClosed(ModalType.SignIn);
    };

    public handleSignUpModalOpen = (): void => {
        this.modalRepository.setModalOpened(ModalType.SignUp);
    };

    public handleSignUpModalClose = (): void => {
        this.modalRepository.setModalClosed(ModalType.SignUp);
    };
}
