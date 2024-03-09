import { HeaderContainer, HeaderContent, HeaderText } from './header.styles';
import effectLeftSvg from '../../assets/effect-left.svg';
import effectRightSvg from '../../assets/effect-rig.svg';
import githubBlogSvg from '../../assets/github-blog.svg';

export const Header = () => {
    return (
        <HeaderContainer>
            <img src={effectLeftSvg} />

            <HeaderContent>
                <img src={githubBlogSvg} />
                <HeaderText>Github Blog</HeaderText>
            </HeaderContent>
            <img src={effectRightSvg} />
        </HeaderContainer>
    );
};
