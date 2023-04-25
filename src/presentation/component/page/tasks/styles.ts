import styled from '@emotion/styled';
import SvgSpriteIcon from '@bit/taptima.common.svg-sprite-icon';

export const Wrapper = styled.div`
    padding: 32px 20px;
`;

export const Title = styled.h1`
    font-size: 32px;
    color: #13293d;
    font-weight: 400;
`;

export const SubTitle = styled.h2`
    font-weight: 400;
    font-size: 20px;
    color: #13293d;
    margin-top: 10px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-top: 20px;
`;

export const Card = styled.div`
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CardTitle = styled.h3`
    font-weight: 700;
    font-size: 16px;
    color: #13293d;
    text-align: center;
`;

export const ArrowIcon = styled(SvgSpriteIcon)`
    fill: #13293d;
    width: 40px;
    margin-top: 15px;
`;
