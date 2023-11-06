import { InputText } from "../../components/atomos/Form/Input";
import { SelectDrop } from "../../components/atomos/Form/selectDrop";
import { Template } from "../template";
import { Range } from "../../components/atomos/Form/Range";

import * as S from "./styles";
import { useState } from "react";
import CustomTable from "../../components/atomos/Table";

const data = [
  { value: "1", label: "Finalizado" },
  { value: "2", label: "Pendente" },
  { value: "3", label: "Cancelado" },
  { value: "4", label: "Digitadas" },
];

const dataTable = [
  {
    numero: "42753",
    menoLance: "1.35",
  },
  {
    numero: "42753",
    menoLance: "2.63",
  },
  {
    numero: "42753",
    menoLance: "2.81",
  },
  {
    numero: "42753",
    menoLance: "2.83",
  },
  {
    numero: "42753",
    menoLance: "2.94",
  },
  {
    numero: "42753",
    menoLance: "2.95",
  },
  {
    numero: "42753",
    menoLance: "3.00",
  },
  {
    numero: "42753",
    menoLance: "1.35",
  },
  {
    numero: "42753",
    menoLance: "3.05",
  },
  {
    numero: "42753",
    menoLance: "3.07",
  },
];

const heardsTable = ["Número", "Menor Lance", "Ações"];

export function Grupos() {
  return (
    <Template title={"Grupos"}>
      <S.ContentInputs>
        <InputText label="Cota" placeholder="Digite a Cota" type="number" />
        <SelectDrop label="Produto" options={data} />
        <Range />
      </S.ContentInputs>

      <S.WrapperTable>
        <CustomTable titles={heardsTable} data={dataTable} />
      </S.WrapperTable>
    </Template>
  );
}
