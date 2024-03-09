import { Header } from '../../components/header/header';
import { ProfileHeader } from '../../components/profile-header/profile-header';
import { Container, ContentContainer } from './home.styles';

export const Home = () => {
    return (
        <Container>
            <Header />
            <ContentContainer>
                <ProfileHeader />
            </ContentContainer>
        </Container>
    );
};
