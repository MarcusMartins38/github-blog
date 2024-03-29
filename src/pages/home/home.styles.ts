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
    position: relative;
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

export const EmptyContainer = styled.div`
    width: 100%;
    height: 136px;
    margin-top: 2em;
    background-color: var(--background-base-color);
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const OverlayStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(31, 31, 31, 0.2);
    z-index: 10;
    border-radius: 16px;
`;
