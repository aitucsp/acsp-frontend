import styled from '@emotion/styled';
import { rem } from 'polished';
import Container from 'presentation/component/common/block/Container';

type BoxProps = {
    color: string;
    grow?: boolean;
};

export const Wrapper = styled(Container)`
    margin-top: 100px;
    width: 100%;
    display: grid;
    grid-template-columns: 8fr 7fr;
`;

export const Image = styled.img`
    width: 700px;
`;

export const ImageWrapper = styled.div`
    margin-left: -200px;
`;

export const Content = styled.div`
    margin-top: 70px;
`;

export const Heading = styled.h3`
    font-weight: ${({ theme }) => theme.font.weight.black};
    font-family: ${({ theme }) => theme.font.family.heading};
    font-size: ${rem(42)};
`;

export const Description = styled.p`
    padding-left: 13px;
    border-left: 2.5px solid #527cfb;
    font-size: ${rem(18)};
    text-align: justify;
`;

export const NumbersText = styled.h3`
    font-size: ${rem(26)};
    color: ${({ theme }) => theme.colors.text};
    margin-top: 20px;
`;

export const BoxContainer = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 15px;
`;

export const Box = styled.div<BoxProps>`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${({ color }) => color};
    border-radius: 10px;
    color: #fff;
    max-width: ${({ grow }) => (grow ? 'auto' : '220px')};
    flex-grow: ${({ grow }) => (grow ? '1' : 'unset')};
`;

export const BoxHeading = styled.div`
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-family: ${({ theme }) => theme.font.family.heading};
    font-size: ${rem(48)};
`;

export const BoxText = styled.p`
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-family: ${({ theme }) => theme.font.family.base};
`;
