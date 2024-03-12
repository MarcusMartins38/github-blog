import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--background-body-color);
`;

export const ContentContainer = styled.div`
    max-width: 900px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: -4%;
`;

export const PublicContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const PublicContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const PublicTitle = styled.h3`
    font-size: 1.25em;
    color: #fff;
`;

export const PublicCount = styled.span`
    color: var(--details-green-color);
    font-size: 0.75em;
`;

export const PublicInput = styled.input`
    padding: 0.75em 1em;
    background-color: var(--background-header-color);
    border: none;
    border-radius: 6px;
    height: 24px;
`;

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2em;
    margin-top: 2em;
`;
