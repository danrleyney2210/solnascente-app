import * as S from "./styles";
import { FaUncharted, FaUsers, FaCrow } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

export function Header() {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Container>
        <S.ContentLogo onClick={() => navigate("/home")}>
          <FaUncharted fill="#dd002e" size={40} />
        </S.ContentLogo>

        <S.ContentInfo>
          <ul>
            <li>
              <NavLink to="/home">
                <AiFillHome size={22} />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/grupos">
                <FaUsers size={22} />
                Grupos
              </NavLink>
            </li>
            <li>
              <NavLink to="/reservas">
                <FaCrow size={22} />
                Reservas
              </NavLink>
            </li>
            <li>
              <NavLink to="/usuarios">
                <AiOutlineUser size={22} />
                Usuários
              </NavLink>
            </li>
          </ul>

          <S.ContentAvatar>
            <S.Avatar></S.Avatar>
            <span>Felipe Alves</span>
          </S.ContentAvatar>
        </S.ContentInfo>
      </S.Container>
    </S.Wrapper>
  );
}
