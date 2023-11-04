import { useState } from 'react'
import * as S from './styles'

interface IRangeProps {
  label: string
}

export function Range({ label }: IRangeProps) {
  const [value, setValue] = useState(0)

  return (
    <S.Wrapper>

      <S.SlideValue value={value} className='sliderValue'>
        <span>{value}</span>
      </S.SlideValue>
      <div className='field'>
        <span className='value left'>0</span>
        <input type="range"
          min={"0"}
          max={'78'}

          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          step={'1'}
        />
        <span className='value right'>78</span>
      </div>
      <p>{label}</p>
    </S.Wrapper>
  )
}