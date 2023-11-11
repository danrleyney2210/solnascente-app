import CustomTable from "components/atomos/Table";
import { Template } from "../template";
import * as S from './styles'
import { CgDetailsMore } from "react-icons/cg";


interface ITable {
  usuario: string;
  senha: string;
}

const dataTable = [
  { usuario: "Fulano", senha: "Mo,0000000" },
  { usuario: "Fulano", senha: "Mo,0000000" },
  { usuario: "Fulano", senha: "Mo,0000000" },
  { usuario: "Fulano", senha: "Mo,0000000" },
];

const heardsTable = ["Usuários", "Senha", "Ações"];

export function Usuarios() {
  return (
    <Template title={'Usuários'}>
      <S.ContentHeader>
        <h3>Métricas de usuários</h3>
        <p><span>67</span> usuários válidos</p>
        <p><span>Nenhum</span> usuário inválido</p>
        <p><span>71</span> usuários com sennha</p>
        <p><span>43</span> usuários sem sennha</p>
        <p><span>114</span> usuários totais</p>
      </S.ContentHeader>
      <br />
      <S.WrapperTable>
        <CustomTable<ITable>
          titles={heardsTable}
          data={dataTable}
          templateColumns="1fr 1fr 1fr"
          renderRow={(item, index) => (
            <>
              <td>{item.usuario}</td>
              <td>{`${item.senha}`}</td>
              <td>
                <CgDetailsMore title="Detalhes" />
              </td>
            </>
          )}
        />
      </S.WrapperTable>
    </Template>
  )
}