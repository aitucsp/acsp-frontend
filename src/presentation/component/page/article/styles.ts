import styled from '@emotion/styled';

export const Wrapper = styled.div`
    padding: 32px 20px;
`;

export const Title = styled.h1`
    font-weight: 400;
    font-size: 32px;
    color: #13293d;
`;

export const Author = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
`;

export const AuthorName = styled.span`
    font-weight: 700;
    font-size: 12px;
    color: #13293d;
    margin-top: 5px;
`;

export const AuthorImage = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
`;

export const Header = styled.div`
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 30px;
`;

export const HeaderContent = styled.div``;

export const ArticleTitle = styled.h2`
    font-weight: 600;
    font-size: 28px;
    color: #13293d;
    margin-top: 15px;
`;

export const Text = styled.p`
    margin-top: 30px;

    font-size: 17px;
    text-align: justify;

    color: #13293d;
`;
