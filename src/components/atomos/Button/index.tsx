import { ButtonHTMLAttributes } from 'react';
import * as S from './styles'


interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
}

export function Button({ text, ...rest }: IButtonProps) {
  return (
    <S.ButtonWrapper type='button' {...rest}>
      <span>{text}</span>
    </S.ButtonWrapper>
  )
}