import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { CONTESTS_GET } from 'constant/apiRoutes';
import ApiClient from 'data/driver/ApiClient';
import starsIcon from 'presentation/svg/stars.svg?sprite';
import bombIcon from 'presentation/svg/bomb.svg?sprite';
import DashboardLayout from 'presentation/component/layout/DashboardLayout';
import Button from 'presentation/component/common/control/Button';
import {
    BombIcon,
    Contest,
    ContestTitle,
    Date,
    Grid,
    Link,
    StarsIcon,
    Title,
    Wrapper,
} from './styles';

type Contest = {
    id: number;
    name: string;
    description: string;
    start_date: string;
    end_date: string;
    created_at: string;
    link: string;
};

const ContestsPage = () => {
    const [contests, setContests] = useState<Contest[]>([]);

    const getContests = async (): Promise<{ cards: Contest[] } | Record<string, never>> => {
        const api = new ApiClient();
        try {
            const { data } = await api.restWithAuthorization.get<{ cards: Contest[] }>(
                CONTESTS_GET,
            );
            if (data) {
                return data;
            }

            return {};
        } catch {
            return {};
        }
    };

    useEffect(() => {
        getContests().then((data) => setContests(data.cards));
    }, []);

    return (
        <DashboardLayout>
            <Wrapper>
                <Title>Contests</Title>
                <Grid>
                    {contests &&
                        contests.map((contest) => (
                            <Contest key={contest.id}>
                                <ContestTitle>{contest.name}</ContestTitle>
                                <Date>
                                    Date:{' '}
                                    {format(new window.Date(contest.start_date), 'dd.MM.yyyy')} -{' '}
                                    {format(new window.Date(contest.end_date), 'dd.MM.yyyy')}
                                </Date>
                                <Link href={contest.link} target="_blank">
                                    <Button color="green">Register</Button>
                                </Link>
                                <StarsIcon icon={starsIcon} />
                                <BombIcon icon={bombIcon} />
                            </Contest>
                        ))}
                </Grid>
            </Wrapper>
        </DashboardLayout>
    );
};

export default ContestsPage;
