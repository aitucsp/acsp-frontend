import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { format, parseISO } from 'date-fns';
import { toast } from 'react-toastify';
import { COMMENT_ARTICLE_BY_ID, MATERIAL_BY_ID } from 'constant/apiRoutes';
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
import { Material } from 'presentation/component/page/materials';
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

export const getPost = async (
    id: string,
): Promise<{ articles: Material[] } | Record<string, never>> => {
    const api = new ApiClient();
    try {
        const { data } = await api.restWithAuthorization.get<{ articles: Material[] }>(
            MATERIAL_BY_ID(id),
        );
        if (data) {
            return data;
        }

        return {};
    } catch {
        return {};
    }
};

const MaterialPage: NextPage = () => {
    const router = useRouter();
    const postId = router.query.id;
    const [material, setMaterial] = useState<Material>();
    const date = format(parseISO(material?.created_at || new Date().toISOString()), 'dd.MM.yyyy');

    useEffect(() => {
        if (postId) {
            getPost(postId as string).then((data) => setMaterial(data.articles[0]));
        }
    }, [postId]);

    const addComment = async (text: string, id: string): Promise<void> => {
        const api = new ApiClient();
        try {
            const { data } = await api.restWithAuthorization.post(COMMENT_ARTICLE_BY_ID(id), {
                text,
            });
            toast('Comment added successfully', { type: 'success' });
            await getPost(postId as string).then((data1) => setMaterial(data1.articles[0]));
            if (data) {
                return data;
            }
        } catch {}
    };

    return (
        <DashboardLayout>
            {!material && <Spinner />}
            {material && (
                <Wrapper>
                    <Title>Materials: Post</Title>
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
                                    <DetailText>{material.upvote}</DetailText>
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
                            <ArticleTitle>{material.topic}</ArticleTitle>
                        </HeaderContent>
                    </Header>
                    <Text>{material.description}</Text>
                </Wrapper>
            )}
        </DashboardLayout>
    );
};

export default MaterialPage;
