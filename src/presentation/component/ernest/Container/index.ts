import styled from '@emotion/styled';
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
