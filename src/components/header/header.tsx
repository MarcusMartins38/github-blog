import { effectLeftSvg, effectRigSvg, githubBlogSvg } from '../../assets';
import { HeaderContainer, HeaderContent, HeaderText } from './header.styles';

export const Header = () => {
    return (
        <HeaderContainer>
            <img src={effectLeftSvg} />

            <HeaderContent>
                <img src={githubBlogSvg} />
                <HeaderText>Github Blog</HeaderText>
            </HeaderContent>
            <img src={effectRigSvg} />
        </HeaderContainer>
    );
};
