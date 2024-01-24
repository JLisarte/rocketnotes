import { RiShutDownLine } from 'react-icons/ri';

import { Container, Profile, Logout } from './styles';

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img 
          src="https://github.com/Jlisarte.png" 
          alt="foto do usuário" 
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Juliano</strong>
        </div>

      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>

    </Container>
  );
}