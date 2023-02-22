import styled from '@emotion/styled';
import { rem } from 'polished';

export const Wrapper = styled.div`
    margin-top: 55px;
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const Content = styled.div``;

export const Heading = styled.h2`
    color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.font.family.heading};
    font-weight: ${({ theme }) => theme.font.weight.black};
    font-size: ${rem(42)};

    span {
        color: ${({ theme }) => theme.colors.lightblue};
    }
`;

export const AboutText = styled.p`
    font-size: ${rem(18)};
    max-width: 450px;
    margin-top: 10px;
    text-align: justify;
`;

export const OurTeam = styled.h3`
    color: ${({ theme }) => theme.colors.blue};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${rem(26)};
    margin-top: 30px;
`;

export const Professionals = styled.h3`
    font-family: ${({ theme }) => theme.font.family.heading};
    font-weight: ${({ theme }) => theme.font.weight.semibold};
    font-size: ${rem(36)};
    line-height: ${rem(36)};
    margin: 5px 0;
`;

export const Quote = styled.p`
    font-size: ${rem(20)};
    text-align: justify;
    max-width: 450px;
`;

export const Member = styled.div`
    padding: 40px 55px;
    background: ${({ theme }) => theme.colors.gray};
    border-radius: 20px;
`;

export const InfoWrapper = styled.div`
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 18px;
    justify-content: start;
    align-items: center;
`;

export const MemberAvatar = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
`;

export const NameWrapper = styled.div``;

export const Name = styled.h3`
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${rem(28)};
`;

export const Specialization = styled.div`
    font-size: ${rem(16)};
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    justify-content: space-between;
    margin-top: 28px;
`;

export const Column = styled.div``;

export const StackText = styled.h5`
    font-weight: ${({ theme }) => theme.font.weight.black};
    font-family: ${({ theme }) => theme.font.family.heading};
    font-size: ${rem(24)};
    line-height: ${rem(24)};
    text-transform: uppercase;
    margin: 0;

    span {
        color: ${({ theme }) => theme.colors.blue};
    }
`;

export const Title = styled.h6`
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${rem(17)};
    margin: 0;
`;

export const Stack = styled.div`
    margin-top: 15px;

    &:first-child {
        margin-top: 0;
    }
`;

export const Technology = styled.div`
    display: grid;
    grid-template-columns: 25px 1fr;
    align-items: center;
    gap: 6px;
    margin-top: 5px;
`;

export const Logo = styled.img`
    width: 25px;
    height: 25px;
`;
