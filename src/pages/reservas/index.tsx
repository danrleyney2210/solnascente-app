import * as S from './styles'
import { Template } from "../template";
import { InputText } from '../../components/atomos/Form/Input';

import { SelectDrop } from '../../components/atomos/Form/selectDrop';
import { Radio } from '../../components/atomos/Form/radio';



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
  { value: '2', label: 'Lance Fixo' },
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
          <SelectDrop label="Produto" options={produtoData} />
          <SelectDrop label="Tipo de Reserva" options={tipoReserva} />
          <SelectDrop label="Canal de Reserva" options={canalReserva} />
        </div>
        <div className="group">
          <SelectDrop label="Status da Reserva" options={statusReserva} />
          <div className='group-select'>
            <Radio label='SOL NASCENTE TIOMN' name='sol' />
            <Radio label='SOL NASCENTE TERESINA' name='sol' />
          </div>
        </div>
      </S.ContentInputs>
    </Template>
  )
}