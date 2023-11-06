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
  templateColumns: string;
};

const CustomTable = ({ data, titles, templateColumns }: CustomTableTypes) => {
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
          {data?.length &&
            data.map((item, idx) => (
              <tr key={idx}>
                <td>{item.numero}</td>
                <td>{`${item.menoLance} %`}</td>
                <td>
                  <CgDetailsMore size={20} title="Detalhes" />
                </td>
              </tr>
            ))}
        </tbody>
      </S.Table>
    </S.WrapperContainer>
  );
};

export default CustomTable;
