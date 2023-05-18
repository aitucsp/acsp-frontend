import React from 'react';
import Button from 'presentation/component/common/control/Button';
import { ButtonWrapper } from 'presentation/component/page/teammates/Card/styles';
import {
    Author,
    Avatar,
    Invitation,
    Left,
    Message,
    MessageText,
    Name,
    OfferText,
    Right,
    Title,
    TopWrapper,
    Wrapper,
} from './styles';

const Invitations = () => {
    return (
        <Wrapper>
            <Invitation>
                <TopWrapper>
                    <Left>
                        <Title>Team Invitation</Title>
                        <OfferText>You received an offer from:</OfferText>
                        <Author>
                            <Avatar src="https://bsa.web.unc.edu/wp-content/uploads/sites/14595/2019/10/kushal_student_profile.jpg" />
                            <Name>Eldos Manap</Name>
                        </Author>
                    </Left>
                    <Right>
                        <ButtonWrapper>
                            <Button color="green">Accept offer</Button>
                            <Button color="darkblue">Decline offer</Button>
                        </ButtonWrapper>
                    </Right>
                </TopWrapper>
                <MessageText>Message:</MessageText>
                <Message>
                    Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать
                    несколько абзацев более менее осмысленного текста рыбы на русском языке, а
                    начинающему оратору отточить навык публичных выступлений в домашних условиях.
                    При создании генератора мы использовали небезизвестный универсальный код речей.
                    Текст генерируется абзацами случайным образом от двух до десяти предложений в
                    абзаце, что позволяет сделать текст более привлекательным и живым для
                    визуально-слухового восприятия. Сайт рыбатекст поможет дизайнеру, верстальщику,
                    вебмастеру
                </Message>
            </Invitation>
            <Invitation>
                <TopWrapper>
                    <Left>
                        <Title>Team Invitation</Title>
                        <OfferText>You received an offer from:</OfferText>
                        <Author>
                            <Avatar src="https://bsa.web.unc.edu/wp-content/uploads/sites/14595/2019/10/kushal_student_profile.jpg" />
                            <Name>Eldos Manap</Name>
                        </Author>
                    </Left>
                    <Right>
                        <ButtonWrapper>
                            <Button color="green">Accept offer</Button>
                            <Button color="darkblue">Decline offer</Button>
                        </ButtonWrapper>
                    </Right>
                </TopWrapper>
                <MessageText>Message:</MessageText>
                <Message>
                    Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать
                    несколько абзацев более менее осмысленного текста рыбы на русском языке, а
                    начинающему оратору отточить навык публичных выступлений в домашних условиях.
                    При создании генератора мы использовали небезизвестный универсальный код речей.
                    Текст генерируется абзацами случайным образом от двух до десяти предложений в
                    абзаце, что позволяет сделать текст более привлекательным и живым для
                    визуально-слухового восприятия. Сайт рыбатекст поможет дизайнеру, верстальщику,
                    вебмастеру
                </Message>
            </Invitation>
            <Invitation>
                <TopWrapper>
                    <Left>
                        <Title>Team Invitation</Title>
                        <OfferText>You received an offer from:</OfferText>
                        <Author>
                            <Avatar src="https://bsa.web.unc.edu/wp-content/uploads/sites/14595/2019/10/kushal_student_profile.jpg" />
                            <Name>Eldos Manap</Name>
                        </Author>
                    </Left>
                    <Right>
                        <ButtonWrapper>
                            <Button color="green">Accept offer</Button>
                            <Button color="darkblue">Decline offer</Button>
                        </ButtonWrapper>
                    </Right>
                </TopWrapper>
                <MessageText>Message:</MessageText>
                <Message>
                    Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать
                    несколько абзацев более менее осмысленного текста рыбы на русском языке, а
                    начинающему оратору отточить навык публичных выступлений в домашних условиях.
                    При создании генератора мы использовали небезизвестный универсальный код речей.
                    Текст генерируется абзацами случайным образом от двух до десяти предложений в
                    абзаце, что позволяет сделать текст более привлекательным и живым для
                    визуально-слухового восприятия. Сайт рыбатекст поможет дизайнеру, верстальщику,
                    вебмастеру
                </Message>
            </Invitation>
        </Wrapper>
    );
};

export default Invitations;
