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
import CustomInputFile from "components/atomos/Form/CustomInputFile";

interface ITable {
  numero: string;
  menoLance: string;
}

type dataTableType = {
  Vencimento: string;
  "Próxima Assembleia": string;
  "CPF Vendedor": string;
  Vendedor: string;
  Grupo: string;
  Cota: string;
  R: string;
  D: string;
  Cliente: string;
  Telefone1: string;
  Telefone2: string;
  "Tipo de Contrato": string;
  "% Amortizado": string;
  "% Quitação": string;
  "Valor para Quitação": string;
  "Maior Lance": string;
  "Menor Lance": string;
  "Assembleia Inicial": string;
  Modelo: string;
  "Status Contrato": string;
  "Data da Venda": string;
  Plano: string;
  "Data de Contemplação": string;
  UF: string;
  Município: string;
  "Seguro Vida": string;
};

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

// const heardsTable = ["Número", "Menor Lance", "Ações"];
const heardsTable = ["Cota", "Grupo", "Menor Lance", "Plano", "Ações"];

export type SelectOpitionProps<T> = {
  value: any;
  label: string;
  element?: T;
};

export function Grupos() {
  const [planoOptions, setPlanoOptions] = useState<
    SelectOpitionProps<Produto>[]
  >([] as SelectOpitionProps<Produto>[]);
  const [plano, setPlano] = useState("");
  const [cota, setCota] = useState("");
  const [dataToken] = useLocalStorage("@dataToken");
  const [tableTitle, setTableTitles] = useState<string[]>([]);
  const [tableData, setTableData] = useState<dataTableType[]>([]);
  const [tableDataTemp, setTableDataTemp] = useState<dataTableType[]>([]);

  const navigate = useNavigate();

  function detalhesGrupo() {
    navigate("/grupos/detalhe");
  }

  // useEffect(() => {
  //   const codEmpresa = dataToken?.retorno?.codEmpresa;

  //   if (!codEmpresa) return;
  //   HondaVendaDigital.Catalogos({ codEmpresa })
  //     .then(({ data }) =>
  //       setProdutooptions(selectParser(data?.catalogoModelos?.produtos))
  //     )
  //     .catch((error) => toast.error("Erro na requisicao do catalogo"));
  // }, [dataToken]);

  // function selectParser(data: Produto[]): SelectOpitionProps<Produto>[] {
  //   return data.map((item) => ({
  //     label: item.dscProduto,
  //     value: item.idProduto,
  //     element: item,
  //   }));
  // }

  async function xlsxParser(e: ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.length && e.target.files[0];
    if (f) {
      const ab = await f.arrayBuffer();

      /* parse */
      const wb = read(ab);

      /* generate array of presidents from the first worksheet */
      const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
      const data = utils.sheet_to_json<string[]>(ws, {
        // skipHidden: true,
        raw: false,
        defval: "",
        header: 1,
      }); // generate objects

      const titles = data[2];
      setTableTitles(titles);

      data.shift();
      data.shift();
      data.shift();

      const t: dataTableType[] = data.map((item) =>
        item.reduce((a, v, idx) => ({ ...a, [titles[idx]]: v }), {})
      ) as dataTableType[];

      setTableData(t);
      setTableDataTemp(t);

      let options = t.map((item) => ({
        value: item.Plano,
        label: item.Plano,
      }));

      const mySetItens = new Set();
      options.forEach((item) => mySetItens.add(JSON.stringify(item)));
      options = [...mySetItens].map((item) => JSON.parse(item as string));

      setPlanoOptions(options);
    }
  }

  useEffect(() => {
    if (!cota && tableDataTemp.length > 0) {
      return setTableData(tableDataTemp);
    }
    setTableData(() =>
      tableDataTemp.filter((item) => item.Cota.includes(cota))
    );
  }, [cota]);

  useEffect(() => {
    if (!plano && tableDataTemp.length > 0) {
      return setTableData(tableDataTemp);
    }
    setTableData(() => tableDataTemp.filter((item) => item.Plano === plano));
  }, [plano]);

  return (
    <Template title={"Grupos"}>
      <S.ContentInputs>
        <InputText
          label="Cota"
          placeholder="Digite a Cota"
          type="number"
          value={cota}
          onChange={(e) => setCota(e?.target?.value)}
        />
        <SelectDrop
          label="Produto"
          options={planoOptions}
          isClearable
          value={planoOptions.find((item) => item.value === plano)}
          onChange={(e) => setPlano(e?.value)}
        />
        <Range label="Parcelas  mínimas" />
        <Range label="Parcelas  máximas" />
      </S.ContentInputs>

      <CustomInputFile onChange={xlsxParser} accept=".xlsx" />

      <S.WrapperTable>
        <CustomTable<dataTableType>
          titles={heardsTable}
          // titles={tableTitle}
          data={tableData}
          templateColumns="1fr 1fr 1fr 1fr 1fr"
          renderRow={(item, index) => (
            <>
              <td>{item.Cota}</td>
              <td>{item.Grupo}</td>
              <td>{`${item["Menor Lance"]} %`}</td>
              <td>{item.Plano}</td>
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
