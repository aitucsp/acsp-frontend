import Container from 'framework/Container';
import ContainerFactory from 'framework/ContainerFactory';
// repository
import SerializableRepository from 'framework/SerializableRepository';
import AppRepository from 'domain/repository/app/AppRepository';
import ModalRepository from 'domain/repository/modal/ModalRepository';
// implementation
import AuthRepository from 'domain/repository/auth/AuthRepository';
import AppRepositoryImpl from 'data/driver/app/AppRepositoryImpl';
import ModalRepositoryImpl from 'data/driver/modal/ModalRepositoryImpl';
// api client
import ApiClient from 'data/driver/ApiClient';
import AuthRepositoryImpl from 'data/driver/auth/AuthRepositoryImpl';
import AbstractApiClient from 'data/AbstractApiClient';

class AppContainer extends Container {
    /**
     * Returns object to be serialized & hydrated
     * */
    // eslint-disable-next-line class-methods-use-this
    protected getData(): Record<string, SerializableRepository> {
        return {
            modalRepository: this.get(ModalRepository),
            authRepository: this.get(AuthRepository),
        };
    }

    /**
     * Binds abstract classes to its implementation
     * */
    protected bindAll() {
        this.bind(AbstractApiClient).to(ApiClient);
        this.bind(AppRepository).to(AppRepositoryImpl);
        this.bind(ModalRepository).to(ModalRepositoryImpl);
        this.bind(AuthRepository).to(AuthRepositoryImpl);
    }
}

const appContainerFactory = new ContainerFactory(AppContainer);

export type ContainerT = ReturnType<typeof appContainerFactory.getInstance>;

export default appContainerFactory;
