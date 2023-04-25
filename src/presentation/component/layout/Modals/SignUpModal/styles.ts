import styled from '@emotion/styled';
import Text from 'presentation/component/common/typography/Text';

export const Wrapper = styled.div`
    max-width: 400px;
    width: 100%;
`;

export const Title = styled(Text)`
    text-align: center;
    width: fit-content;
    margin: 0 auto;
`.withComponent('h2');

export const TitleWrapper = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
`;

export const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 30px;
`;
