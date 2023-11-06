import React, { useMemo, useState } from "react";
import * as S from "./styles";
import { CgDetailsMore } from "react-icons/cg";

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
                <td>
                  <CgDetailsMore size={20} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </S.WrapperContainer>
  );
};

export default CustomTable;
