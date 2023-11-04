import * as S from './styles'
import React, { InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function InputText({ label, ...props }: IInputProps) {
  return (
    <S.Wrapper>
      <label htmlFor={props.name}>{label}</label>
      <input type="text" {...props} />
    </S.Wrapper>
  )
}