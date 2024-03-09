import {
    CardDatePass,
    CardDescription,
    CardTitle,
    CardTitleContainer,
    CardWrapper,
} from './card.styles';

export const Card = () => {
    return (
        <CardWrapper>
            <CardTitleContainer>
                <CardTitle>JavaScript data types and data structures</CardTitle>
                <CardDatePass>Há 1 dia</CardDatePass>
            </CardTitleContainer>
            <CardDescription>
                Programming languages all have built-in data structures, but
                these often differ from one language to another. This article
                attempts to list the built-in data structures available in
            </CardDescription>
        </CardWrapper>
    );
};
