import { FaUncharted } from "react-icons/fa";
import * as S from "./styles";
import { Template } from "../template";

export function Home() {
  return (
    <Template title={'Home'}>
      <S.Content>
        <FaUncharted fill="#dd002e" size={40} />
        <h2>Seja bem-vindo </h2>
      </S.Content>
    </Template>
  );
}
