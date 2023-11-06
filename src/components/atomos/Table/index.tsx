import React, { useMemo, useState } from "react";
import * as S from "./styles";

export type DataTable = {
  numero: string;
  menoLance: string;
};

export type CustomTableTypes = {
  titles: string[];
  data: DataTable[];
};

const CustomTable = ({ data, titles }: CustomTableTypes) => {
  return (
    <S.WrapperContainer>
      <table>
        <thead>
          <tr>
            {titles?.length &&
              titles.map((item, idx) => <th key={idx}>{item}</th>)}
          </tr>
        </thead>
        <tbody>
          {data?.length &&
            data.map((item, idx) => (
              <tr key={idx}>
                <td>{item.numero}</td>
                <td>{`${item.menoLance} %`}</td>
                <td>{"Acao"}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </S.WrapperContainer>
  );
};

export default CustomTable;
