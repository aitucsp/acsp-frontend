import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Input from 'presentation/component/common/control/Input';
import Button from 'presentation/component/common/control/Button';
import {
    buttonCss,
    CommentText,
    ControlWrapper,
    InputBlock,
    inputCss,
    MyImage,
    MyInfo,
    MyName,
    Title,
    Wrapper,
} from './styles';

type Props = {
    addComment: (comment: string, id: string) => Promise<void>;
    comments: any[];
};

const Answers: React.FC<Props> = (props) => {
    const { addComment, comments } = props;
    const router = useRouter();
    const articleId = router.query.id;
    const [comment, setComment] = useState<string>('');

    const handleSend = async () => {
        if (comment.length === 0) {
            return;
        }
        await addComment(comment, articleId as string).then(() => setComment(''));
    };

    return (
        <Wrapper>
            <Title>Comments</Title>
            <InputBlock>
                <MyInfo>
                    <MyImage src="https://bsa.web.unc.edu/wp-content/uploads/sites/14595/2019/10/kushal_student_profile.jpg" />
                    <MyName>Ernest Murzashev</MyName>
                </MyInfo>
                <ControlWrapper>
                    <Input
                        placeholder="Write a comment..."
                        type="text"
                        css={inputCss}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <Button type="button" size="small" css={buttonCss} onClick={handleSend}>
                        Send
                    </Button>
                </ControlWrapper>
            </InputBlock>
            {comments.map((currentComment) => (
                <InputBlock>
                    <MyInfo>
                        <MyImage src="https://bsa.web.unc.edu/wp-content/uploads/sites/14595/2019/10/kushal_student_profile.jpg" />
                        <MyName>Ernest Murzashev</MyName>
                    </MyInfo>
                    <CommentText>{currentComment.text}</CommentText>
                </InputBlock>
            ))}
        </Wrapper>
    );
};

export default Answers;
