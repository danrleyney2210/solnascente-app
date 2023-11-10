import { SelectDrop } from "../../components/atomos/Form/selectDrop";
import { Template } from "../template";

import { CgDetailsMore } from "react-icons/cg";
import * as S from "./styles";
import CustomTable from "../../components/atomos/Table";
import { Radio } from "../../components/atomos/Form/radio";
import { Button } from "../../components/atomos/Button";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { HondaVendaDigital } from "../../service/hondaVendaDigital";
import { SelectOpitionProps } from "../grupos";
import { IdetalheProduto } from "../../types/detalheProduto";
import { useContextSite } from "context/Context";

interface ITable {
  date: string;
  cota: string;
  vendedor: string;
  concessionaria: string;
}

const dataTable = [
  {
    date: "07/08",
    cota: "441-2-5",
    vendedor: "usuário name",
    concessionaria: "SOL NASCENTE",
  },
  {
    date: "07/08",
    cota: "441-2-5",
    vendedor: "usuário name",
    concessionaria: "SOL NASCENTE",
  },
  {
    date: "07/08",
    cota: "441-2-5",
    vendedor: "usuário name",
    concessionaria: "SOL NASCENTE",
  },
  {
    date: "07/08",
    cota: "441-2-5",
    vendedor: "usuário name",
    concessionaria: "SOL NASCENTE",
  },
  {
    date: "07/08",
    cota: "441-2-5",
    vendedor: "usuário name",
    concessionaria: "SOL NASCENTE",
  },
  {
    date: "07/08",
    cota: "441-2-5",
    vendedor: "usuário name",
    concessionaria: "SOL NASCENTE",
  },
  {
    date: "07/08",
    cota: "441-2-5",
    vendedor: "usuário name",
    concessionaria: "SOL NASCENTE",
  },
  {
    date: "07/08",
    cota: "441-2-5",
    vendedor: "usuário name",
    concessionaria: "SOL NASCENTE",
  },
  {
    date: "07/08",
    cota: "441-2-5",
    vendedor: "usuário name",
    concessionaria: "SOL NASCENTE",
  },
  {
    date: "07/08",
    cota: "441-2-5",
    vendedor: "usuário name",
    concessionaria: "SOL NASCENTE",
  },
];

const heardsTable = ["Data", "Cota-R-D", "Vendedor", "Concessionária", "Ações"];

export function DetalheGrupo() {
  const { setIsLoad } = useContextSite();
  const [dataToken] = useLocalStorage("@dataToken");
  const [idsProdutos, setIdsProdutos] = useState<number[]>([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState("");
  const [listaProdutosCompleta, setListaProdutosCompleta] = useState<
    IdetalheProduto[][]
  >([]);
  const [listaProdutosOptions, setListaProdutosOptions] = useState<
    SelectOpitionProps<IdetalheProduto>[]
  >([]);

  useEffect(() => {
    setIsLoad(true);
    HondaVendaDigital.ListaProdutos().then(({ data }) => {
      setIdsProdutos(data.map((item) => item.idProduto));
    });
  }, []);

  useEffect(() => {
    if (!idsProdutos?.length || !dataToken?.retorno?.codEmpresa) return;
    Promise.allSettled(
      idsProdutos.map((id) =>
        HondaVendaDigital.GetDetalheProdutoById({
          idProduto: +id,
          codConcessionaria: dataToken?.retorno?.codEmpresa,
        })
      )
    )
      .then((data) =>
        data
          .map((item) => item.status === "fulfilled" && item?.value?.data)
          .filter((item) => typeof item !== "boolean")
      )
      .then((data) => setListaProdutosCompleta(data as IdetalheProduto[][]))
      .finally(() => setIsLoad(false));
  }, [idsProdutos, dataToken]);

  useEffect(() => {
    if (!listaProdutosCompleta.length) return;

    let temp: IdetalheProduto[] = [];
    listaProdutosCompleta.forEach((e) => temp.push(...e));
    const mySet = new Set();
    selectParser(temp).forEach((item) => mySet.add(JSON.stringify(item)));

    const listaUnicos = [...mySet].map((item) => JSON.parse(item as string));
    setListaProdutosOptions(listaUnicos);
  }, [listaProdutosCompleta]);

  function selectParser(
    data: IdetalheProduto[]
  ): SelectOpitionProps<IdetalheProduto>[] {
    return data.map((item) => ({
      label: item.nome,
      value: item.id,
      element: item,
    }));
  }

  return (
    <Template title={"Detalhe do Grupo / Reserva"}>
      <S.ContentInputs>
        <div className="group-select">
          <Radio label="SOL NASCENTE TIMON" name="sol" id="1" />
          <Radio label="SOL NASCENTE TERESINA" name="sol" id="2" />
        </div>
        <SelectDrop
          label="Produto"
          isClearable
          options={listaProdutosOptions}
          value={listaProdutosOptions?.find(
            (item) => item.value === produtoSelecionado
          )}
          onChange={(e) => setProdutoSelecionado(e?.value)}
        />
        <S.ContentButton>
          <span>Ações</span>
          <S.ContentBtn>
            <Button text="Reservar" />
            <Button text="Reservar via IHS" />
            <Button text="Procurar" />
          </S.ContentBtn>
        </S.ContentButton>
      </S.ContentInputs>

      <S.WrapperTable>
        <CustomTable<ITable>
          titles={heardsTable}
          data={dataTable}
          templateColumns="1fr 1fr 1fr 1fr 1fr"
          renderRow={(item, index) => (
            <>
              <td>{item.date}</td>
              <td>{`${item.cota}`}</td>
              <td>{`${item.vendedor}`}</td>
              <td>{`${item.concessionaria}`}</td>
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
