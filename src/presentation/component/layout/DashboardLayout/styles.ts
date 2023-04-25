import styled from '@emotion/styled';
import { rem } from 'polished';

export const DashboardWrapper = styled.div`
    display: grid;
    grid-template-columns: 280px 1fr;
`;

export const RightWrapper = styled.div`
    grid-column-start: 2;
`;

export const MainWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 300px;
`;

export const SafeChildrenWrapper = styled.div`
    max-width: 800px;
    width: 100%;
`;

export const AdvertisingText = styled.div`
    font-size: ${rem(18)};
    color: #18435a;
`;
