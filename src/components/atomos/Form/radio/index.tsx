import * as S from './styles'
import React, { InputHTMLAttributes } from 'react';

interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function Radio({ label, ...props }: IRadioProps) {
  return (
    <S.Wrapper>
      <input type="radio" {...props} id={props.id} />
      <label htmlFor={props.id}>{label}</label>
    </S.Wrapper>
  )
}