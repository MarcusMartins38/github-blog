import { useEffect, useState } from 'react';
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
import axios from 'axios';

export interface UserType {
    id: number;
    avatar_url: string;
    html_url: string;
    login: string;
    followers: number;
    company: string;
    name: string;
}

export interface IssueType {
    id: number;
    body: string;
    html_url: string;
    title: string;
    created_at: Date;
}

export const Home = () => {
    const [user, setUser] = useState<UserType>({} as UserType);
    const [search, setSearch] = useState('');
    const [issues, setIssues] = useState<IssueType[]>([]);

    useEffect(() => {
        axios
            .get(
                'https://api.github.com/search/issues?q=repo:marcusmartins38/github-blog'
            )
            .then((response) => {
                console.log(response.data);
                setIssues(response.data.items);
            });
    }, []);

    useEffect(() => {
        axios
            .get('https://api.github.com/users/marcusmartins38')
            .then((response) => {
                setUser(response.data);
            });
    }, []);

    return (
        <Container>
            <Header />
            <ContentContainer>
                <ProfileHeader user={user} />

                <PublicContainer>
                    <PublicContent>
                        <PublicTitle>Publications</PublicTitle>
                        <PublicCount>6 publications</PublicCount>
                    </PublicContent>
                    <PublicInput placeholder="Search content" />

                    <CardContainer>
                        {issues.map((issue) => (
                            <Card key={issue.id} issue={issue} />
                        ))}
                    </CardContainer>
                </PublicContainer>
            </ContentContainer>
        </Container>
    );
};
