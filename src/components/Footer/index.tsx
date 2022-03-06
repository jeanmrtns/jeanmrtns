import LogoImg from '../../assets/logo_sm.svg';
import { Container, Content } from './styles';

export const Footer = () => {
  return (
    <Container className='container'>
      <Content>
        <figure>
          <LogoImg />
        </figure>
        <p>© 2022 - Jean Martins</p>
      </Content>
    </Container>
  )
}