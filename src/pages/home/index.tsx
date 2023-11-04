import { Footer } from '../../components/atomos/Footer'
import { Header } from '../../components/atomos/Header'
import { FaUncharted } from 'react-icons/fa'
import * as S from './styles'


export function Home() {
  return (
    <S.Wrapper>
      <Header />
      <S.Content>
        <FaUncharted fill='#dd002e' size={40} />
        <h2>Seja bem-vindo </h2>
      </S.Content>
      <Footer />
    </S.Wrapper>
  )
}