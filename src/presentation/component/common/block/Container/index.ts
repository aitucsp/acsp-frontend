import styled from '@emotion/styled';
import { mq } from 'presentation/mediaquery';

const Container = styled.div`
    margin-right: auto;
    margin-left: auto;
    padding-right: 15px;
    padding-left: 15px;

    ${mq.greaterSm} {
        width: 750px;
    }

    ${mq.greaterMd} {
        width: 970px;
    }

    ${mq.greaterLg} {
        width: 1170px;
    }
`;

export default Container;
