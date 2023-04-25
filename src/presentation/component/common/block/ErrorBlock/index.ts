import styled from '@emotion/styled';
import { opacify, rem } from 'polished';

const Wrapper = styled.div`
    padding: 10px;
    background-color: ${({ theme }) => opacify(-0.9, theme.colors.red)};
    margin-top: 20px;
    border: 1px solid ${({ theme }) => opacify(-0.4, theme.colors.red)};
    border-radius: 7px;
    font-size: ${rem(14)};
`;

export default Wrapper;
