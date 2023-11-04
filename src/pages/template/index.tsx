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
      <S.Content>

        {children}
      </S.Content>
      <Footer />
    </S.Wrapper>
  )
}