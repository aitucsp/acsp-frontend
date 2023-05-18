import React from 'react';
import { INVITE_USER } from 'constant/apiRoutes';
import User from 'domain/entity/app/User';
import ApiClient from 'data/driver/ApiClient';
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

    const invite = async () => {
        const api = new ApiClient();
        try {
            await api.restWithAuthorization.post(INVITE_USER(id));
            alert('Successfully invited');
        } catch (e) {
            console.error(e);
        }
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
                    <Button color="blue" onClick={invite}>
                        To invite
                    </Button>
                </ButtonWrapper>
            </Right>
        </Wrapper>
    );
};

export default Card;
