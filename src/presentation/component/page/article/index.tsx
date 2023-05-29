import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { format, parseISO } from 'date-fns';
import { toast } from 'react-toastify';
import { ARTICLE_BY_ID, COMMENT_ARTICLE_BY_ID } from 'constant/apiRoutes';
import ApiClient from 'data/driver/ApiClient';
import likeIcon from 'presentation/svg/ui/like.svg?sprite';
import eyeIcon from 'presentation/svg/ui/eye.svg?sprite';
import commentIcon from 'presentation/svg/ui/comment.svg?sprite';
import DashboardLayout from 'presentation/component/layout/DashboardLayout';
import Spinner from 'presentation/component/common/block/Spinner';
import {
    Detail,
    DetailIcon,
    Details,
    DetailText,
} from 'presentation/component/page/articles/ArticleCard/styles';
import Answers from 'presentation/component/page/article/Answers';
import { Article } from 'presentation/component/page/articles';
import {
    ArticleTitle,
    Author,
    AuthorImage,
    AuthorName,
    Header,
    HeaderContent,
    Text,
    Title,
    Wrapper,
} from './styles';

export const getArticle = async (
    id: string,
): Promise<{ article: Article } | Record<string, never>> => {
    const api = new ApiClient();
    try {
        const { data } = await api.restWithAuthorization.get<{ article: Article }>(
            ARTICLE_BY_ID(id),
        );
        if (data) {
            return data;
        }

        return {};
    } catch {
        return {};
    }
};

const ArticlePage: NextPage = () => {
    const router = useRouter();
    const articleId = router.query.id;
    const [article, setArticle] = useState<Article>();
    const date = format(parseISO(article?.created_at || new Date().toISOString()), 'dd.MM.yyyy');

    useEffect(() => {
        if (articleId) {
            getArticle(articleId as string).then((data) => setArticle(data.article));
        }
    }, [articleId]);

    const addComment = async (text: string, id: string): Promise<void> => {
        const api = new ApiClient();
        try {
            const { data } = await api.restWithAuthorization.post(COMMENT_ARTICLE_BY_ID(id), {
                text,
            });
            toast('Comment added successfully', { type: 'success' });
            await getArticle(articleId as string).then((data1) => setArticle(data1.article));
            if (data) {
                return data;
            }
        } catch {}
    };

    return (
        <DashboardLayout>
            {!article && <Spinner />}
            {article && (
                <Wrapper>
                    <Title>Articles: Post</Title>
                    <Header>
                        <Author>
                            <AuthorImage src="https://minervaschools-production-cms-uploads.s3.amazonaws.com/images/20150916_MNRV_220.2e16d0ba.fill-724x452.jpg?could_not_match_s3_bucket_and_object" />
                            <AuthorName>Tamerlan</AuthorName>
                        </Author>
                        <HeaderContent>
                            <Details>
                                <Detail>
                                    <DetailText>{date}</DetailText>
                                </Detail>
                                <Detail>
                                    <DetailIcon icon={likeIcon} />
                                    <DetailText>{article.upvote}</DetailText>
                                </Detail>
                                <Detail>
                                    <DetailIcon icon={eyeIcon} />
                                    <DetailText>0</DetailText>
                                </Detail>
                                <Detail>
                                    <DetailIcon icon={commentIcon} />
                                    <DetailText>0</DetailText>
                                </Detail>
                            </Details>
                            <ArticleTitle>{article.topic}</ArticleTitle>
                        </HeaderContent>
                    </Header>
                    <Text>{article.description}</Text>
                    <Answers addComment={addComment} comments={article.comments} />
                </Wrapper>
            )}
        </DashboardLayout>
    );
};

export default ArticlePage;
