import * as S from './styles'
import { FaUncharted, FaUsers, FaCrow } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'

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
              <FaUsers size={22} />
              <a href="#">Grupos</a>
            </li>
            <li>
              <FaCrow size={22} />
              <a href="#">Reservas</a>
            </li>
            <li>
              <AiOutlineUser size={22} />
              <a href="#">Usuários</a>
            </li>
          </ul>

          <S.ContentAvatar>
            <S.Avatar></S.Avatar>
            <span>Felipe Alves</span>
          </S.ContentAvatar>
        </S.ContentInfo>
      </S.Container>
    </S.Wrapper>
  )
}