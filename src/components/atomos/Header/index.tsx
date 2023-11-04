import * as S from './styles'
import { FaUncharted, FaUsers, FaCrow } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Container>
        <S.ContentLogo onClick={() => navigate('/')}>
          <FaUncharted fill='#dd002e' size={40} />
        </S.ContentLogo>

        <S.ContentInfo>
          <ul>
            <li onClick={() => navigate('/grupos')}>
              <FaUsers size={22} />
              <a href="#">Grupos</a>
            </li>
            <li onClick={() => navigate('/reservas')}>
              <FaCrow size={22} />
              <a href="#">Reservas</a>
            </li>
            <li onClick={() => navigate('/usuarios')}>
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