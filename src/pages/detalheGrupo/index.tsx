
import { SelectDrop } from "../../components/atomos/Form/selectDrop";
import { Template } from "../template";

import { CgDetailsMore } from "react-icons/cg";
import * as S from "./styles";
import CustomTable from "../../components/atomos/Table";
import { Radio } from "../../components/atomos/Form/radio";
import { Button } from "../../components/atomos/Button";


interface ITable {
  date: string,
  cota: string,
  vendedor: string,
  concessionaria: string,
}


const data = [
  { value: "1", label: "Finalizado" },
  { value: "2", label: "Pendente" },
  { value: "3", label: "Cancelado" },
  { value: "4", label: "Digitadas" },
];

const dataTable = [
  {
    date: "07/08",
    cota: "441-2-5",
    vendedor: "usuário name",
    concessionaria: "SOL NASCENTE"
  },
  {
    date: "07/08",
    cota: "441-2-5",
    vendedor: "usuário name",
    concessionaria: "SOL NASCENTE"
  },
  {
    date: "07/08",
    cota: "441-2-5",
    vendedor: "usuário name",
    concessionaria: "SOL NASCENTE"
  },
  {
    date: "07/08",
    cota: "441-2-5",
    vendedor: "usuário name",
    concessionaria: "SOL NASCENTE"
  },
  {
    date: "07/08",
    cota: "441-2-5",
    vendedor: "usuário name",
    concessionaria: "SOL NASCENTE"
  },
  {
    date: "07/08",
    cota: "441-2-5",
    vendedor: "usuário name",
    concessionaria: "SOL NASCENTE"
  },
  {
    date: "07/08",
    cota: "441-2-5",
    vendedor: "usuário name",
    concessionaria: "SOL NASCENTE"
  },
  {
    date: "07/08",
    cota: "441-2-5",
    vendedor: "usuário name",
    concessionaria: "SOL NASCENTE"
  },
  {
    date: "07/08",
    cota: "441-2-5",
    vendedor: "usuário name",
    concessionaria: "SOL NASCENTE"
  },
  {
    date: "07/08",
    cota: "441-2-5",
    vendedor: "usuário name",
    concessionaria: "SOL NASCENTE"
  },
];

const heardsTable = ["Data", "Cota-R-D", "Vendedor", "Concessionária", "Ações"];

export function DetalheGrupo() {
  return (
    <Template title={"Detalhe do Grupo / Reserva"}>
      <S.ContentInputs>
        <div className='group-select'>
          <Radio label='SOL NASCENTE TIOMN' name='sol' id="1" />
          <Radio label='SOL NASCENTE TERESINA' name='sol' id="2" />
        </div>
        <SelectDrop label="Produto" options={data} />
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
