import styled from '@emotion/styled';

export const Wrapper = styled.div`
    padding: 32px 20px;
`;

export const Title = styled.h1`
    font-weight: 400;
    font-size: 32px;
    color: #13293d;
    margin-right: 20px;
`;

export const Subtitle = styled.h2`
    font-weight: 400;
    font-size: 20px;
    color: #13293d;
`;

export const SearchBar = styled.input`
    background: #f0f0f0;
    border-radius: 12px;
    padding: 16px 30px;
    border: none;
    width: 300px;
    margin-top: 20px;

    &:focus {
        outline: none;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 30px;
`;

export const Card = styled.div`
    background: #13293d;
    border-radius: 12px;
    padding: 18px 25px;
`;

export const CardTitle = styled.h3`
    font-weight: 900;
    font-size: 20px;
    color: #ffffff;
`;

export const Author = styled.p`
    margin-top: 10px;
    color: #fff;
    font-size: 12px;
`;

export const BottomWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 10px;
`;

export const Evaluation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0;
`;
export const Percentage = styled.span`
    font-weight: 800;
    font-size: 26px;
    color: #ffffff;
`;
