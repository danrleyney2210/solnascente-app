import React, { useEffect, useState } from "react";
import * as S from "./styles";

interface IInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "placeholder"> {
  label?: string;
}

const CustomInputFile = ({ label, value, ...rest }: IInputProps) => {
  const [focus, setFocus] = useState(false);

  return (
    <S.LabelWrapper>
      <S.LabelText isFocus={!!value || focus}>{label}</S.LabelText>
      <S.Input
        type="file"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        {...rest}
      />
    </S.LabelWrapper>
  );
};

export default CustomInputFile;
