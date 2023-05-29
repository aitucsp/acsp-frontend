import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { ARTICLES_GET } from 'constant/apiRoutes';
import ApiClient from 'data/driver/ApiClient';
import DashboardLayout from 'presentation/component/layout/DashboardLayout';
import Spinner from 'presentation/component/common/block/Spinner';
import ArticleCard from 'presentation/component/page/articles/ArticleCard';
import { Badge, BadgeGroup, Title, Wrapper } from './styles';

export type Article = {
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

const ArticlesPage: NextPage = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    const getArticles = async (): Promise<{ articles: Article[] } | Record<string, never>> => {
        const api = new ApiClient();
        try {
            const { data } = await api.restWithAuthorization.get<{ articles: Article[] }>(
                ARTICLES_GET,
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
        getArticles().then((data) => setArticles(data.articles));
    }, []);

    return (
        <DashboardLayout>
            <Wrapper>
                <BadgeGroup>
                    <Title>Articles</Title>
                    <Badge active>New 🔥</Badge>
                    <Badge>Popular</Badge>
                    <Badge>Saved</Badge>
                </BadgeGroup>
                {articles && articles.length === 0 && <Spinner />}
                {articles &&
                    articles.length > 0 &&
                    articles.map((article) => (
                        <ArticleCard
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

export default ArticlesPage;
