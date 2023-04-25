import styled from '@emotion/styled';
import { rem } from 'polished';

const Wrapper = styled.label`
    font-size: ${rem(14)};
    color: ${({ theme }) => theme.colors.text};
    margin-left: 3px;
    margin-top: 10px;
    display: block;
`;

export default Wrapper;
