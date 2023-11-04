
import Select from 'react-select';
import * as S from './styles'



interface ISelectProps {
  options: { value: string; label: string }[];
  label: string
}

export function SelectDrop({ options, label }: ISelectProps) {
  return (
    <S.Wrapper>
      <label htmlFor="">{label}</label>
      <Select options={options} />
    </S.Wrapper>
  )
}