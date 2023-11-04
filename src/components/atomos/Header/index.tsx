import * as S from './styles'
import { FaUncharted } from 'react-icons/fa'

export function Header() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ContentLogo>
          <FaUncharted fill='#dd002e' size={40} />
        </S.ContentLogo>

        <S.ContentInfo>
          <ul>
            <li>
              <a href="#">Grupos</a>
            </li>
            <li>
              <a href="#">Reservas</a>
            </li>
            <li>
              <a href="#">Usuários</a>
            </li>
          </ul>

          <S.ContentAvatar>
            <S.Avatar></S.Avatar>
            <span>Usuário</span>
          </S.ContentAvatar>
        </S.ContentInfo>
      </S.Container>
    </S.Wrapper>
  )
}