import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { CardDescription } from './description-markdown.styles';

interface DescriptionMarkdownProps {
    children: string;
}

export const DescriptionMarkdown: React.FC<DescriptionMarkdownProps> = ({
    children,
}) => {
    return (
        <CardDescription>
            <ReactMarkdown remarkPlugins={[gfm]}>{children}</ReactMarkdown>
        </CardDescription>
    );
};
