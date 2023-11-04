import * as S from './styles'

export function Range() {
  return (
    <S.Wrapper>
      <div className='value-left'>0</div>
      <input type="range" min={"0"} max={'78'} step={'1'} />
      <div className='value-right'>78</div>
    </S.Wrapper>
  )
}