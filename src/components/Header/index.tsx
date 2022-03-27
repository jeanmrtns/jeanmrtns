import { BsChatDots } from 'react-icons/bs';
import { FiFilePlus, FiGithub } from 'react-icons/fi';
import LogoImage from '../../assets/logo.svg';
import { Container, Content, Link, Logo, Navigation } from './styles';

export const Header = () => {
  return (
    <Container>
      <Content className='container'>
        <Logo>
          <LogoImage />
        </Logo>

        <Navigation>
          <ul>
            <li>
              <Link href="https://github.com/jeanmrtns" target="_blank">
                <FiGithub />
                Meu Github
              </Link>
            </li>
            <li>
              <Link href='/cv-jean-martins.pdf' download="Curriculo Jean">
                <FiFilePlus />
                Curriculo
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <BsChatDots />
                Contato
              </Link>
            </li>
          </ul>
        </Navigation>
      </Content>
    </Container>
  )
}