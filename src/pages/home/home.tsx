import { useCallback, useEffect, useState } from 'react';
import { Card } from '../../components/card/card';
import { Header } from '../../components/header/header';
import { ProfileHeader } from '../../components/profile-header/profile-header';
import {
    CardContainer,
    Container,
    ContentContainer,
    EmptyContainer,
    OverlayStyle,
    PublicContainer,
    PublicContent,
    PublicCount,
    PublicInput,
    PublicTitle,
} from './home.styles';
import axios from 'axios';
import { debounce } from 'lodash';
import { BeatLoader } from 'react-spinners';

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
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(
                'https://api.github.com/search/issues?q=repo:marcusmartins38/github-blog'
            )
            .then((response) => {
                setIssues(response.data.items);
            })
            .finally(() => setIsLoading(false));
    }, []);

    useEffect(() => {
        axios
            .get('https://api.github.com/users/marcusmartins38')
            .then((response) => {
                setUser(response.data);
            });
    }, []);

    const handleSearch = useCallback(
        debounce((query: string) => {
            setIsLoading(true);
            const encodedQuery = encodeURIComponent(query);
            const url = `https://api.github.com/search/issues?q=${encodedQuery}+repo:marcusmartins38/github-blog`;
            axios
                .get(url)
                .then((response) => {
                    setIssues(response.data.items);
                })
                .finally(() => setIsLoading(false));
        }, 500),
        []
    );

    return (
        <Container>
            <Header />
            <ContentContainer>
                <ProfileHeader user={user} />

                <PublicContainer>
                    {isLoading && (
                        <OverlayStyle>
                            <BeatLoader color="var(--details-green-color)" />{' '}
                        </OverlayStyle>
                    )}
                    <PublicContent>
                        <PublicTitle>Publications</PublicTitle>
                        <PublicCount>6 publications</PublicCount>
                    </PublicContent>
                    <PublicInput
                        placeholder="Search content"
                        value={search}
                        onChange={(event) => {
                            setSearch(event.target.value);
                            handleSearch(event.target.value);
                        }}
                    />

                    {issues.length > 0 ? (
                        <CardContainer>
                            {issues.map((issue) => (
                                <Card key={issue.id} issue={issue} />
                            ))}
                        </CardContainer>
                    ) : (
                        <EmptyContainer>
                            <span>
                                Sorry, there are any issue whit this title :(
                            </span>
                        </EmptyContainer>
                    )}
                </PublicContainer>
            </ContentContainer>
        </Container>
    );
};
