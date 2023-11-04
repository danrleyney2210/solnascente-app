import { Footer } from '../../components/atomos/Footer'
import { Header } from '../../components/atomos/Header'
import * as S from './styles'

interface props {
  children: React.ReactNode
}

export function Template({ children }: props) {
  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <S.Content>
          {children}
        </S.Content>
      </S.Container>
      <Footer />
    </S.Wrapper>
  )
}