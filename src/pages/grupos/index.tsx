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

export function Grupos() {
  return (
    <Template title={"Grupos"}>
      <S.ContentInputs>
        <InputText label="Cota" placeholder="Digite a Cota" type="number" />
        <SelectDrop label="Produto" options={data} />
        <Range />
      </S.ContentInputs>

      <S.WrapperTable>
        <CustomTable />
      </S.WrapperTable>
    </Template>
  );
}
