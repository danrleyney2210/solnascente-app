import Select, { GroupBase, Props, StylesConfig } from "react-select";
import * as S from "./styles";

interface ISelectProps {
  label: string;
}

export function SelectDrop<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({ label, ...rest }: Props<Option, IsMulti, Group> & ISelectProps) {
  return (
    <S.Wrapper>
      <label htmlFor="">{label}</label>
      <Select {...rest} />
    </S.Wrapper>
  );
}
