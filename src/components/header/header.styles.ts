import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100vw;
    background-color: var(--background-header-color);

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

export const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeaderText = styled.span`
    color: var(--details-green-color);
    font-size: 24px;
    text-transform: uppercase;
    margin-top: 1em;
`;
