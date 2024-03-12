import { formatDistanceToNow } from 'date-fns';
import { IssueType } from '../../pages/home/home';
import {
    CardDatePass,
    CardTitle,
    CardTitleContainer,
    CardWrapper,
} from './card.styles';
import { DescriptionMarkdown } from '../description-markdown/description-markdown';
import { truncateString } from '../../utils/string';

interface CardType {
    issue: IssueType;
}

export const Card = ({ issue }: CardType) => {
    return (
        <CardWrapper>
            <CardTitleContainer>
                <CardTitle>{truncateString(issue.title, 40)}</CardTitle>
                <CardDatePass>
                    {formatDistanceToNow(issue.created_at, { addSuffix: true })}
                </CardDatePass>
            </CardTitleContainer>
            <DescriptionMarkdown>
                {truncateString(issue.body, 160)}
            </DescriptionMarkdown>
        </CardWrapper>
    );
};
