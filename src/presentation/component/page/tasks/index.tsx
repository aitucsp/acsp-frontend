import React from 'react';
import { NextPage } from 'next';
import bigArrowIcon from 'presentation/svg/tasks/big-arrow.svg?sprite';
import DashboardLayout from 'presentation/component/layout/DashboardLayout';
import { ArrowIcon, Card, CardTitle, Grid, SubTitle, Title, Wrapper } from './styles';

const TasksPage: NextPage = () => {
    return (
        <DashboardLayout>
            <Wrapper>
                <Title>Tasks: Subjects</Title>
                <SubTitle>Choose a subject</SubTitle>
                <Grid>
                    {Array.from(Array(12).keys()).map(() => (
                        <Card>
                            <CardTitle>Introduction to Programming: C++</CardTitle>
                            <ArrowIcon icon={bigArrowIcon} />
                        </Card>
                    ))}
                </Grid>
            </Wrapper>
        </DashboardLayout>
    );
};

export default TasksPage;
