import { InputText } from "../../components/atomos/Form/Input";
import { SelectDrop } from "../../components/atomos/Form/selectDrop";
import { Template } from "../template";
import { Range } from '../../components/atomos/Form/Range'

import * as S from './styles'

const data = [
  { value: '1', label: 'Finalizado' },
  { value: '2', label: 'Pendente' },
  { value: '3', label: 'Cancelado' },
  { value: '4', label: 'Digitadas' },
]


export function Grupos() {
  return (
    <Template title={'Grupos'}>
      <S.ContentInputs>
        <InputText label="Cota" placeholder="Digite a Cota" type="number" />
        <SelectDrop label="Produto" options={data} />
        <Range label="Parcelas  mínimas" />
        <Range label="Parcelas  máximas" />
      </S.ContentInputs>



    </Template>
  )
}