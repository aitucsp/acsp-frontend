import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { MATERIALS_GET } from 'constant/apiRoutes';
import ApiClient from 'data/driver/ApiClient';
import DashboardLayout from 'presentation/component/layout/DashboardLayout';
import Spinner from 'presentation/component/common/block/Spinner';
import MaterialCard from 'presentation/component/page/materials/MaterialCard';
import { Badge, BadgeGroup, Title, Wrapper } from 'presentation/component/page/materials/styles';

export type Material = {
    id: string;
    user_id: number;
    topic: string;
    description: string;
    upvote: number;
    downvote: number;
    created_at: string;
    updated_at: string;
    comments: any[];
    image_url: string;
};

const MaterialsPage: NextPage = () => {
    const [materials, setMaterials] = useState<Material[]>([]);

    const getMaterials = async (): Promise<{ materials: Material[] } | Record<string, never>> => {
        const api = new ApiClient();
        try {
            const { data } = await api.restWithAuthorization.get<{ materials: Material[] }>(
                MATERIALS_GET,
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
        getMaterials().then((data) => setMaterials(data.materials));
    }, []);

    return (
        <DashboardLayout>
            <Wrapper>
                <BadgeGroup>
                    <Title>Materials</Title>
                    <Badge active>New 🔥</Badge>
                    <Badge>Popular</Badge>
                    <Badge>Saved</Badge>
                    <Badge>My posts</Badge>
                </BadgeGroup>
                {materials.length === 0 && <Spinner />}
                {materials.length > 0 &&
                    materials.map((article) => (
                        <MaterialCard
                            createdAt={article.created_at}
                            upvotes={article.upvote}
                            topic={article.topic}
                            id={article.id}
                            key={article.id}
                            imageUrl={article.image_url}
                        />
                    ))}
            </Wrapper>
        </DashboardLayout>
    );
};

export default MaterialsPage;
