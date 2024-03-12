import {
    Avatar,
    companyIconSvg,
    followIconSvg,
    githubIconSvg,
    linkIconSvg,
} from '../../assets';
import { UserType } from '../../pages/home/home';
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

interface ProfileHeaderType {
    user: UserType;
}

export const ProfileHeader = ({ user }: ProfileHeaderType) => {
    return (
        <ProfileContainer>
            <AvatarImg src={user.avatar_url} />

            <ProfileContent>
                <TitleContainer>
                    <TitleName>{user.name}</TitleName>
                    <LinkGithub href={user.html_url} target="_blank">
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
                        <InfoText>{user.login}</InfoText>
                    </InfoContent>
                    <InfoContent>
                        <img src={companyIconSvg} />
                        <InfoText>Pareto</InfoText>
                    </InfoContent>
                    <InfoContent>
                        <img src={followIconSvg} />
                        <InfoText>{user.followers} followers</InfoText>
                    </InfoContent>
                </InfoContainer>
            </ProfileContent>
        </ProfileContainer>
    );
};
