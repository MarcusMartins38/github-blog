import styled from 'styled-components';

export const CardWrapper = styled.div`
    padding: 32px;
    display: flex;
    flex-direction: column;
    background-color: var(--background-base-color);
    border-radius: 10px;
    max-height: 260px;
    box-sizing: border-box;
`;

export const CardTitleContainer = styled.div`
    display: flex;
    align-items: initial;
    justify-content: space-between;
`;

export const CardTitle = styled.h2`
    font-size: 1.25em;
    max-width: 224px;
    margin-top: 0px;
`;

export const CardDatePass = styled.span`
    font-size: 0.75em;
    color: var(--details-green-color);
    margin-top: 8px;
`;
