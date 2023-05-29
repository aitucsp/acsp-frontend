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

    public get isCreateSearchOfTeammateOpened(): boolean {
        return this.modalRepository.getModalOpenedByType(ModalType.CreateSearchOfTeammate);
    }

    public get isInviteTeammateModalOpened(): boolean {
        return this.modalRepository.getModalOpenedByType(ModalType.InviteTeammate);
    }

    public get isVideoModalOpened(): boolean {
        return this.modalRepository.getModalOpenedByType(ModalType.Video);
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

    public handleCreateSearchOfTeammateModalOpen = (): void => {
        this.modalRepository.setModalOpened(ModalType.CreateSearchOfTeammate);
    };

    public handleCreateSearchOfTeammateModalClose = (): void => {
        this.modalRepository.setModalClosed(ModalType.CreateSearchOfTeammate);
    };

    public handleInviteTeammateModalOpen = (): void => {
        this.modalRepository.setModalOpened(ModalType.InviteTeammate);
    };

    public handleInviteTeammateModalClose = (): void => {
        this.modalRepository.setModalClosed(ModalType.InviteTeammate);
    };

    public handleVideoModalOpen = (): void => {
        this.modalRepository.setModalOpened(ModalType.Video);
    };

    public handleVideoModalClose = (): void => {
        this.modalRepository.setModalClosed(ModalType.Video);
    };
}
