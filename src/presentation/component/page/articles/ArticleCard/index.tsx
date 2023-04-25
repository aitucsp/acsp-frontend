import React from 'react';
import { format, parseISO } from 'date-fns';
import NextLink from 'next/link';
import { ARTICLE_DETAIL } from 'constant/route';
import likeIcon from 'presentation/svg/ui/like.svg?sprite';
import eyeIcon from 'presentation/svg/ui/eye.svg?sprite';
import commentIcon from 'presentation/svg/ui/comment.svg?sprite';
import Button from 'presentation/component/common/control/Button';
import {
    Author,
    AuthorImage,
    AuthorName,
    Content,
    Controls,
    customButtonCss,
    Detail,
    DetailIcon,
    Details,
    DetailText,
    Image,
    ImageWrapper,
    Title,
    Wrapper,
} from './styles';

type Props = {
    createdAt: string;
    upvotes: number;
    topic: string;
    id: string;
};

const ArticleCard: React.FC<Props> = (props) => {
    const { createdAt, upvotes, topic, id } = props;

    if (!createdAt) {
        return null;
    }

    const date = format(parseISO(createdAt), 'dd.MM.yyyy');

    return (
        <Wrapper>
            <ImageWrapper>
                <Image src="https://dev.java/assets/images/java-logo-vert-blk.png" />
            </ImageWrapper>
            <Content>
                <Details>
                    <Detail>
                        <DetailText>{date}</DetailText>
                    </Detail>
                    <Detail>
                        <DetailIcon icon={likeIcon} />
                        <DetailText>{upvotes}</DetailText>
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
                <Title>{topic}</Title>
                <Author>
                    <AuthorImage src="https://minervaschools-production-cms-uploads.s3.amazonaws.com/images/20150916_MNRV_220.2e16d0ba.fill-724x452.jpg?could_not_match_s3_bucket_and_object " />
                    <AuthorName>Tamerlan Zholbarys</AuthorName>
                </Author>
                <Controls>
                    <NextLink href={ARTICLE_DETAIL(id)}>
                        <Button size="medium" css={customButtonCss}>
                            READ
                        </Button>
                    </NextLink>
                    <Button size="medium" color="green" css={customButtonCss}>
                        SAVE
                    </Button>
                </Controls>
            </Content>
        </Wrapper>
    );
};

export default ArticleCard;
