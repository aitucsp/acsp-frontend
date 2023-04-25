import styled from '@emotion/styled';
import { rem } from 'polished';
import SvgSpriteIcon from '@bit/taptima.common.svg-sprite-icon';
import { css } from '@emotion/react';

export const Wrapper = styled.div`
    width: 100%;
    margin-top: 70px;
    display: flex;
    justify-content: space-between;
`;

export const ImageBlock = styled.div`
    width: 100%;
    max-width: 510px;
    display: grid;
    gap: 35px;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 500px;
`;

export const Heading = styled.h2`
    color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.font.family.heading};
    font-weight: ${({ theme }) => theme.font.weight.black};
    font-size: ${rem(42)};

    span {
        color: ${({ theme }) => theme.colors.blue};
    }
`;

export const Text = styled.p`
    font-size: ${rem(18)};
    margin-top: 10px;
`;

export const SubHeading = styled.h3`
    color: ${({ theme }) => theme.colors.blue};
    font-size: ${rem(24)};
    margin-top: 20px;
`;

export const CheckList = styled.ul`
    display: grid;
    gap: 20px 15px;
    grid-template-columns: 30px 1fr;
    margin-top: 15px;
    align-items: center;
`;

export const CheckIcon = styled(SvgSpriteIcon)`
    width: 100%;
    fill: ${({ theme }) => theme.colors.green};
`;

export const CheckText = styled.li`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${rem(18)};
`;

export const submitButtonCss = css`
    margin-top: 30px;
`;
