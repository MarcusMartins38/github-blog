import styled from 'styled-components';

export const CardWrapper = styled.div`
    padding: 32px;
    display: flex;
    flex-direction: column;
    background-color: var(--background-base-color);
    border-radius: 10px;
`;

export const CardTitleContainer = styled.div`
    display: flex;
    align-items: initial;
    justify-content: space-between;
`;

export const CardTitle = styled.h2`
    font-size: 1.25em;
    max-width: 280px;
    margin-top: 0px;
`;

export const CardDatePass = styled.span`
    font-size: 0.75em;
    color: var(--details-green-color);
    margin-top: 8px;
`;

export const CardDescription = styled.span`
    color: #b8b8b8;
`;
