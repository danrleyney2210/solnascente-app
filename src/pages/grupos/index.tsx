import { InputText } from "../../components/atomos/Form/Input";
import { SelectDrop } from "../../components/atomos/Form/selectDrop";
import { Template } from "../template";
import { Range } from "../../components/atomos/Form/Range";

import * as S from "./styles";
import CustomTable from "../../components/atomos/Table";
import { CgDetailsMore } from "react-icons/cg";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { ChangeEvent, useEffect, useState } from "react";
import { HondaVendaDigital } from "../../service/hondaVendaDigital";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Produto } from "types/catalogos";
import { read, utils } from "xlsx";

import { Input } from "components/atomos/Form/CustomInput/styles";

interface ITable {
  numero: string;
  menoLance: string;
}

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

  const navigate = useNavigate();

  function detalhesGrupo() {
    navigate("/grupos/detalhe");
  }

  useEffect(() => {
    const codEmpresa = dataToken?.retorno?.codEmpresa;

    if (!codEmpresa) return;
    HondaVendaDigital.Catalogos({ codEmpresa })
      .then(({ data }) =>
        setProdutooptions(selectParser(data?.catalogoModelos?.produtos))
      )
      .catch((error) => toast.error("Erro na requisicao do catalogo"));
  }, [dataToken]);

  function selectParser(data: Produto[]): SelectOpitionProps<Produto>[] {
    return data.map((item) => ({
      label: item.dscProduto,
      value: item.idProduto,
      element: item,
    }));
  }

  async function xlsxParser(e: ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.length && e.target.files[0];
    if (f) {
      const ab = await f.arrayBuffer();

      /* parse */
      const wb = read(ab);

      /* generate array of presidents from the first worksheet */
      const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
      const data = utils.sheet_to_json(ws, {
        // skipHidden: true,
        raw: false,
        defval: "",
        header: 1,
      }); // generate objects

      console.log(data);
    }
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

      <div>
        <Input type="file" onChange={xlsxParser} />
      </div>

      <S.WrapperTable>
        <CustomTable<ITable>
          titles={heardsTable}
          data={dataTable}
          templateColumns="1fr 1fr 1fr"
          renderRow={(item, index) => (
            <>
              <td>{item.numero}</td>
              <td>{`${item.menoLance}`}</td>
              <td onClick={() => detalhesGrupo()}>
                <CgDetailsMore title="Detalhes" />
              </td>
            </>
          )}
        />
      </S.WrapperTable>
    </Template>
  );
}
