import styled from 'styled-components';

export const ProfileContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 2em 2.5em;
    background-color: var(--background-base-color);
    border-radius: 16px;
`;

export const AvatarImg = styled.img`
    margin-right: 2em;
`;

export const ProfileContent = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    flex: 1;
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const TitleName = styled.h3`
    font-size: 1.5em;
    color: #fff;
`;

export const LinkGithub = styled.a`
    text-transform: uppercase;
    color: var(--details-green-color);
    display: flex;
    align-items: center;
`;

export const Description = styled.span`
    font-size: 1em;
    color: #b8b8b8;
    margin-bottom: 1.5em;
`;

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

export const InfoContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-right: 1.5em;
`;

export const InfoText = styled.span`
    margin-left: 0.25em;
`;
