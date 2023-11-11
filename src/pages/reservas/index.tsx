import * as S from './styles'
import { Template } from "../template";
import { InputText } from '../../components/atomos/Form/Input';

import { SelectDrop } from '../../components/atomos/Form/selectDrop';
import { Radio } from '../../components/atomos/Form/radio';
import CustomTable from 'components/atomos/Table';
import { CgDetailsMore } from 'react-icons/cg';

interface ITable {
  cota: string;
  vendedor: string;
  produto: string;
  parcelas: string;
  ultimoEvento: string;
}

const heardsTable = ["Cota", "Vendedor/CPF", "Produto/Modelo", "Parcelas Faltantes", "Último evento", "Ações"];

const dataTable = [
  {
    cota: '23454',
    vendedor: 'Fulano',
    produto: 'Honda XX',
    parcelas: '76 x',
    ultimoEvento: 'xxxx'
  },
]

const produtoData = [
  { value: '1', label: 'Todos' },
  { value: '2', label: 'Minha Scooter Honda +' },
  { value: '3', label: 'Vou de Honda +' },
  { value: '4', label: 'Minha Scooter Honda' },
  { value: '5', label: 'Vou de Honda' },
  { value: '6', label: 'Easy Honda' },
  { value: '7', label: 'Mais Especial' },
  { value: '8', label: 'TRX E CRF' },
]

const statusReserva = [
  { value: '1', label: 'Finalizado' },
  { value: '2', label: 'Pendente' },
  { value: '3', label: 'Cancelado' },
  { value: '4', label: 'Digitadas' },
]

const tipoReserva = [
  { value: '1', label: 'Todos' },
  { value: '2', label: 'Lance Livre' },
  { value: '3', label: 'Lance Fixo' },
]

const canalReserva = [
  { value: '1', label: 'Todos' },
  { value: '2', label: 'Aplicativo' },
  { value: '2', label: 'IHS' },
]



export function Reservas() {
  return (
    <Template title={'Reserva'}>
      <S.ContentInputs>
        <div className="group">
          <InputText label="Cota" placeholder="Digite a Cota" type="number" />
          <InputText label="Data de reserva" type="date" />
          <SelectDrop label="Produto" options={produtoData} />
          <SelectDrop label="Tipo de Reserva" options={tipoReserva} />
        </div>

        <div className="group">

          <SelectDrop label="Canal de Reserva" options={canalReserva} />
          <SelectDrop label="Status da Reserva" options={statusReserva} />
          <div className='group-select'>
            <Radio label='SOL NASCENTE TIOMN' name='sol' />
            <Radio label='SOL NASCENTE TERESINA' name='sol' />
          </div>
        </div>

      </S.ContentInputs>
      <br />
      <S.WrapperTable>
        <CustomTable<ITable>
          titles={heardsTable}
          data={dataTable}
          templateColumns="1fr 1fr 1fr 1fr 1fr 1fr"
          renderRow={(item, index) => (
            <>

              <td>{`${item.cota}`}</td>
              <td>{`${item.vendedor}`}</td>
              <td>{`${item.produto}`}</td>
              <td>{`${item.parcelas}`}</td>
              <td>{`${item.ultimoEvento}`}</td>

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