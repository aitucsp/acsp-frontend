import React from 'react';
import { INVITE_USER } from 'constant/apiRoutes';
import User from 'domain/entity/app/User';
import ApiClient from 'data/driver/ApiClient';
import { useService } from 'presentation/context/Container';
import ModalController from 'presentation/controller/ModalController';
import Button from 'presentation/component/common/control/Button';
import { ButtonWrapper, Image, Right, SmallPill, Stack, SubText, Title, Wrapper } from './styles';

type Props = {
    user: User;
    skills: string[];
    position: string;
    id: number;
};

const Card = (props: Props) => {
    const { user, skills, position, id } = props;
    const { handleInviteTeammateModalOpen } = useService(ModalController);

    const invite = async () => {
        const api = new ApiClient();
        try {
            await api.restWithAuthorization.post(INVITE_USER(id));
            alert('Successfully invited');
        } catch (e) {
            console.error(e);
        }
    };

    const handleInviteClick = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.inviteId = id;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        console.log(window.inviteId);
        handleInviteTeammateModalOpen();
    };

    return (
        <Wrapper>
            <Image src="https://acsp-avatars.object.pscloud.io/user-avatars/default" />
            <Right>
                <Title>{user.name}</Title>
                <SubText>Desired position in a team:</SubText>
                <SmallPill>{position}</SmallPill>
                <SubText>Tech Stack:</SubText>
                {skills.map((skill) => (
                    <Stack key={skill}>{skill}</Stack>
                ))}
                <ButtonWrapper>
                    <Button color="lightblue">Learn more</Button>
                    <Button color="blue" onClick={handleInviteClick}>
                        To invite
                    </Button>
                </ButtonWrapper>
            </Right>
        </Wrapper>
    );
};

export default Card;
