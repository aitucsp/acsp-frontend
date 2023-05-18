import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { CREATE_CARD } from 'constant/apiRoutes';
import ApiClient from 'data/driver/ApiClient';
import { useService } from 'presentation/context/Container';
import ModalController from 'presentation/controller/ModalController';
import Modal from 'presentation/component/common/block/Modal';
import Label from 'presentation/component/common/typography/Label';
import Input from 'presentation/component/common/control/Input';
import Select, { OptionT } from 'presentation/component/common/control/Select';
import Button from 'presentation/component/common/control/Button';
import { createButtonCss, Title, Wrapper } from './styles';

const options: OptionT[] = [
    {
        value: 'backend',
        label: 'backend',
    },
    {
        value: 'frontend',
        label: 'frontend',
    },
    {
        value: 'design',
        label: 'design',
    },
    {
        value: 'project management',
        label: 'project management',
    },
];

const CreateSearchOfTeammateModal = observer(() => {
    const [position, setPosition] = useState('');
    const [skills, setSkills] = useState<string[]>([]);
    const [rawSkills, setRawSkills] = useState('');
    const [description, setDescription] = useState('');
    const { isCreateSearchOfTeammateOpened, handleCreateSearchOfTeammateModalClose } =
        useService(ModalController);

    const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setRawSkills(e.target.value);
        setSkills(e.target.value.split(', '));
    };

    const handleSubmit = async () => {
        const api = new ApiClient();
        try {
            await api.restWithAuthorization.post(CREATE_CARD, {
                description,
                position,
                skills,
            });
            window.location.reload();
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <Modal
            isOpen={isCreateSearchOfTeammateOpened}
            close={handleCreateSearchOfTeammateModalClose}
        >
            <Wrapper>
                <Title>Create a card</Title>
                <Label>Choose the position you want to be</Label>
                <Select
                    options={options}
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                />
                <Label>Choose the skills you own</Label>
                <Input
                    value={rawSkills}
                    onChange={handleSkillChange}
                    placeholder="Write separated by comma"
                />
                <Label>Write about yourself</Label>
                <Input value={description} onChange={(e) => setDescription(e.target.value)} />
                <Button color="blue" css={createButtonCss} onClick={handleSubmit}>
                    Create
                </Button>
            </Wrapper>
        </Modal>
    );
});

export default CreateSearchOfTeammateModal;
