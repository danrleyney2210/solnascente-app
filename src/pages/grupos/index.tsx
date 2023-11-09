import { InputText } from "../../components/atomos/Form/Input";
import { SelectDrop } from "../../components/atomos/Form/selectDrop";
import { Template } from "../template";
import { Range } from "../../components/atomos/Form/Range";

import * as S from "./styles";
import CustomTable from "../../components/atomos/Table";
import { CgDetailsMore } from "react-icons/cg";
import { Produto } from "../../types/catalogos";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useEffect, useState } from "react";
import { SolnascenteApi } from "../../service";
import { toast } from "react-toastify";

interface ITable {
  numero: string,
  menoLance: string,
}


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

export type SelectOpitionProps<T> = {
  value: any;
  label: string;
  element: T;
};

export function Grupos() {
  const [produtosOptions, setProdutooptions] = useState<
    SelectOpitionProps<Produto>[]
  >([] as SelectOpitionProps<Produto>[]);
  const [produto, setProduto] = useState("");
  const [dataToken] = useLocalStorage("@dataToken");

  useEffect(() => {
    const codEmpresa = dataToken?.retorno?.codEmpresa;

    if (!codEmpresa) return;
    SolnascenteApi.Catalogos({ codEmpresa })
      .then(({ data }) =>
        setProdutooptions(catalogoSelectParser(data?.catalogoModelos?.produtos))
      )
      .catch((error) => toast.error("Erro na requisicao do catalogo"));
  }, [dataToken]);

  function catalogoSelectParser(
    data: Produto[]
  ): SelectOpitionProps<Produto>[] {
    return data.map((item) => ({
      label: item.dscProduto,
      value: item.idProduto,
      element: item,
    }));
  }

  return (
    <Template title={"Grupos"}>
      <S.ContentInputs>
        <InputText label="Cota" placeholder="Digite a Cota" type="number" />
        <SelectDrop
          label="Produto"
          options={produtosOptions}
          isClearable
          value={produtosOptions.find((item) => item.value === produto)}
          onChange={(e) => setProduto(e?.value)}
        />
        <Range label="Parcelas  mínimas" />
        <Range label="Parcelas  máximas" />
      </S.ContentInputs>

      <S.WrapperTable>
        <CustomTable<ITable>
          titles={heardsTable}
          data={dataTable}
          templateColumns="1fr 1fr 1fr"
          renderRow={(item, index) => (
            <>
              <td>{item.numero}</td>
              <td>{`${item.menoLance}`}</td>
              <td>
                <CgDetailsMore title="Detalhes" />
              </td>
            </>
          )}
        />
      </S.WrapperTable>
    </Template>
  );
}
