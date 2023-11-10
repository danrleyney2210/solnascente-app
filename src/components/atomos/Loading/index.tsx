import * as S from "./styles";
import Load from "../../../assets/svg/load.svg";

export function Loading() {
  return (
    <S.Wrapper>
      <img src={Load} alt="Loagin" width={100} />
    </S.Wrapper>
  );
}
