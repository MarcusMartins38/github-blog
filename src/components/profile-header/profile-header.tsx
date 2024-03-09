import {
    Avatar,
    companyIconSvg,
    followIconSvg,
    githubIconSvg,
    linkIconSvg,
} from '../../assets';
import {
    AvatarImg,
    Description,
    InfoContainer,
    InfoContent,
    InfoText,
    LinkGithub,
    ProfileContainer,
    ProfileContent,
    TitleContainer,
    TitleName,
} from './profile-header.styles';

export const ProfileHeader = () => {
    return (
        <ProfileContainer>
            <AvatarImg src={Avatar} />

            <ProfileContent>
                <TitleContainer>
                    <TitleName>Marcus Martins</TitleName>
                    <LinkGithub>
                        Github
                        <img
                            style={{ marginLeft: '4px', marginBottom: '4px' }}
                            src={linkIconSvg}
                        />
                    </LinkGithub>
                </TitleContainer>
                <Description>
                    Tristique volutpat pulvinar vel massa, pellentesque egestas.
                    Eu viverra massa quam dignissim aenean malesuada suscipit.
                    Nunc, volutpat pulvinar vel mass.
                </Description>
                <InfoContainer>
                    <InfoContent>
                        <img src={githubIconSvg} />
                        <InfoText>marcusmartins38</InfoText>
                    </InfoContent>
                    <InfoContent>
                        <img src={companyIconSvg} />
                        <InfoText>Pareto</InfoText>
                    </InfoContent>
                    <InfoContent>
                        <img src={followIconSvg} />
                        <InfoText>32 followers</InfoText>
                    </InfoContent>
                </InfoContainer>
            </ProfileContent>
        </ProfileContainer>
    );
};
