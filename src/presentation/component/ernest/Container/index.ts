import styled from '@emotion/styled';
import { rem } from 'polished';
import { mq } from 'presentation/mediaquery';

// Универсальный контейнер для всех страниц
const Container = styled.div`
    margin-right: auto;
    margin-left: auto;
    padding-right: 15px;
    padding-left: 15px;

    ${mq.greaterLg} {
        width: 1170px;
    }
`;

// Нужно добавить поддержку маленьких и больших экранов

export default Container;

export const Image = styled.img`
    width: 700px;
`;

// Not responsive

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

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    border-radius: 10px;
    color: #fff;
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
