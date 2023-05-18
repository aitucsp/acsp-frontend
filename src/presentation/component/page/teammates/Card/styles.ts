import styled from '@emotion/styled';

export const Wrapper = styled.div`
    margin-top: 20px;
    padding: 20px;
    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    display: grid;
    grid-template-columns: 130px 1fr;
    gap: 15px;
`;

export const Image = styled.img`
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 4px;
`;

export const Title = styled.h4`
    font-weight: 500;
    font-size: 16px;
    color: #13293d;
`;

export const SubText = styled.p`
    font-weight: 500;
    font-size: 12px;
    color: #13293d;
    margin-top: 5px;
`;

export const Right = styled.div``;

export const SmallPill = styled.span`
    font-weight: 600;
    font-size: 10px;
    color: #ffffff;
    background: #0da16c;
    border-radius: 4px;
    display: inline-block;
    padding: 3px 13px;
    margin-bottom: 5px;
`;

export const Stack = styled.span`
    background: #f0f0f0;
    border-radius: 4px;
    padding: 2px 8px;
    font-weight: 300;
    font-size: 12px;
    color: #13293d;
    margin-right: 3px;
`;

export const ButtonWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    gap: 10px;
`;
