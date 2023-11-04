import * as S from './styles'
import React, { SelectHTMLAttributes } from 'react';

interface IDropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: { value: string; label: string }[];
}


export function Dropdown({ label, options, ...props }: IDropdownProps) {
  return (
    <S.Wrapper>
      <label htmlFor={props.id}>{label}</label>
      <select {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </S.Wrapper>
  )
}