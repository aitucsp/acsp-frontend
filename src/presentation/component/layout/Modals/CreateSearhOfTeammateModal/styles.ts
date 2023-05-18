import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Text from 'presentation/component/common/typography/Text';

export const Wrapper = styled.div``;

export const Title = styled(Text)`
    text-align: center;
    width: fit-content;
    margin: 0 auto;
`.withComponent('h2');

export const createButtonCss = css`
    margin-top: 10px;
`;
