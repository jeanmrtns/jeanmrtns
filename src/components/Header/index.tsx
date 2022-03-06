import LogoImage from '../../assets/logo.svg';
import { Container, Navigation, Logo, Link } from './styles';
import { FiGithub, FiFilePlus } from 'react-icons/fi';

export const Header = () => {
  return (
    <Container className='container'>
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
        </ul>
      </Navigation>
    </Container>
  )
}