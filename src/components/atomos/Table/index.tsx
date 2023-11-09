import React, { useMemo, useState } from "react";
import * as S from "./styles";
import { CgDetailsMore } from "react-icons/cg";



export type CustomTableTypes<T> = {
  titles: string[];
  data: T[];
  templateColumns: string;
  renderRow: (item: T, index: number) => React.ReactNode;
};

const CustomTable = <T,>({ data, titles, templateColumns, renderRow }: CustomTableTypes<T>) => {
  return (
    <S.WrapperContainer>
      <S.Table templateColumns={templateColumns}>
        <thead>
          <tr>
            {titles?.length &&
              titles.map((item, idx) => <th key={idx}>{item}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx}>{renderRow(item, idx)}</tr>
          ))}
        </tbody>
      </S.Table>
    </S.WrapperContainer>
  );
};

export default CustomTable;
