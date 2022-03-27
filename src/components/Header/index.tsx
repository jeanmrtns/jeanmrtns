import { default as NextLink } from 'next/link';
import { BsChatDots } from 'react-icons/bs';
import { FiFilePlus, FiGithub } from 'react-icons/fi';
import LogoImage from '../../assets/logo.svg';
import { Container, Content, Link, Logo, Navigation } from './styles';

export const Header = () => {
  return (
    <Container>
      <Content className='container'>
        <Logo>
          <NextLink href="/" passHref>
            <Link><LogoImage /></Link>
          </NextLink>
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
              <NextLink href='/contact' passHref>
                <Link>
                  <BsChatDots />
                  Contato
                </Link>
              </NextLink>
            </li>
          </ul>
        </Navigation>
      </Content>
    </Container>
  )
}