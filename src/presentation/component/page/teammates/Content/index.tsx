import React, { useEffect, useState } from 'react';
import { APPLICANTS_GET } from 'constant/apiRoutes';
import User from 'domain/entity/app/User';
import ApiClient from 'data/driver/ApiClient';
import { useService } from 'presentation/context/Container';
import ModalController from 'presentation/controller/ModalController';
import Button from 'presentation/component/common/control/Button';
import Card from 'presentation/component/page/teammates/Card';
import { Grid, Left, Right, SearchBar, wideButtonCss, Wrapper } from './styles';

type Card = {
    id: number;
    position: string;
    skills: string[];
    description: string;
    user: User;
};

const Content = () => {
    const { handleCreateSearchOfTeammateModalOpen } = useService(ModalController);
    const [cards, setCards] = useState<Card[]>();
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCards, setFilteredCards] = useState<Card[]>([]);

    const getCards = async (): Promise<{ cards: Card[] } | Record<string, never>> => {
        const api = new ApiClient();
        try {
            const { data } = await api.restWithAuthorization.get<{ cards: Card[] }>(APPLICANTS_GET);
            if (data) {
                return data;
            }

            return {};
        } catch {
            return {};
        }
    };

    useEffect(() => {
        getCards().then((data) => setCards(data.cards));
    }, []);

    useEffect(() => {
        if (cards) {
            const filtered = cards.filter((card) =>
                card.user.name.toLowerCase().includes(searchQuery.toLowerCase()),
            );
            setFilteredCards(filtered);
        }
    }, [searchQuery, cards]);

    if (!cards) return null;

    return (
        <Wrapper>
            <Grid>
                <Left>
                    <SearchBar
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {filteredCards.map((card) => (
                        <Card
                            id={card.id}
                            position={card.position}
                            skills={card.skills}
                            user={card.user}
                            key={card.id}
                        />
                    ))}
                </Left>
                <Right>
                    <Button
                        color="blue"
                        css={wideButtonCss}
                        onClick={() => handleCreateSearchOfTeammateModalOpen()}
                    >
                        Create a card
                    </Button>
                    <Button color="green" css={wideButtonCss}>
                        HTML
                    </Button>
                    <Button color="green" css={wideButtonCss}>
                        CSS
                    </Button>
                    <Button color="green" css={wideButtonCss}>
                        JavaScript
                    </Button>
                </Right>
            </Grid>
        </Wrapper>
    );
};

export default Content;
