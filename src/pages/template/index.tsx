import { Footer } from "../../components/atomos/Footer";
import { Header } from "../../components/atomos/Header";
import * as S from "./styles";

interface props {
  children: React.ReactNode;
  title: string;
}

export function Template({ children, title }: props) {
  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <S.ContentBox>
          <h2>{title}</h2>
          <S.Content>{children}</S.Content>
        </S.ContentBox>
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
}
