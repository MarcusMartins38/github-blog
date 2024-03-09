import { Card } from '../../components/card/card';
import { Header } from '../../components/header/header';
import { ProfileHeader } from '../../components/profile-header/profile-header';
import {
    CardContainer,
    Container,
    ContentContainer,
    PublicContainer,
    PublicContent,
    PublicCount,
    PublicInput,
    PublicTitle,
} from './home.styles';

export const Home = () => {
    return (
        <Container>
            <Header />
            <ContentContainer>
                <ProfileHeader />

                <PublicContainer>
                    <PublicContent>
                        <PublicTitle>Publications</PublicTitle>
                        <PublicCount>6 publications</PublicCount>
                    </PublicContent>
                    <PublicInput placeholder="Search content" />

                    <CardContainer>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </CardContainer>
                </PublicContainer>
            </ContentContainer>
        </Container>
    );
};
