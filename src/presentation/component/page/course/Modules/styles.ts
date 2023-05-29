import styled from '@emotion/styled';
import SvgSpriteIcon from '@bit/taptima.common.svg-sprite-icon';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 30px;
`;

export const ModuleWrapper = styled.div`
    display: grid;
    grid-template-columns: 530px 1fr;
    gap: 10px;
`;

export const ModuleBox = styled.div`
    background: #2a628f;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    width: 530px;
    padding: 22px 38px;
`;

export const ModuleTitle = styled.div`
    font-weight: 800;
    font-size: 18px;
    color: #ffffff;
`;

export const ModuleNumber = styled.div`
    font-weight: 600;
    font-size: 18px;
    color: #13293d;
    padding: 10px 25px;
    background: #ffffff;
    border-radius: 6px;
    width: fit-content;
`;

export const TopWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

// export const AccordionWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 10px;
// `;
//
// export const AccordionBox = styled.div`
//     background: #ffffff;
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
// `;
//
// export const AccordionTitle = styled.div`
//     font-weight: 500;
//     font-size: 16px;
//     color: #13293d;
// `;

export const LessonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
`;

export const Lesson = styled.div`
    font-weight: 500;
    font-size: 16px;
    color: #13293d;
    background: #ffffff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    padding: 8px 24px;
    display: flex;
    justify-content: space-between;
`;

export const ArrowIcon = styled(SvgSpriteIcon)``;

export const Results = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    background: #0da16c;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    padding: 30px;

    span {
        font-weight: 800;
        font-size: 18px;
        color: #ffffff;
    }
`;
