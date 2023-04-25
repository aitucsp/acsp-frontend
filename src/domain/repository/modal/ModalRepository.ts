import { injectable } from 'inversify';
import SerializableRepository from 'framework/SerializableRepository';
import ModalType from 'domain/entity/modal/ModalType';

@injectable()
export default abstract class ModalRepository extends SerializableRepository {
    public abstract setModalOpened(modal: ModalType): void;

    public abstract setModalClosed(modal: ModalType): void;

    public abstract getModalOpenedByType(modal: ModalType): boolean;
}
