import { InputText } from "../../components/atomos/Form/Input";
import { Dropdown } from "../../components/atomos/Form/dropdown";
import { Radio } from "../../components/atomos/Form/radio";
import { SelectDrop } from "../../components/atomos/Form/selectDrop";
import { Template } from "../template";
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
      <h2>Grupos</h2>
      <InputText label="Cota" placeholder="Cota" type="number" />
      <Radio label="Sol Nascente TIMON" id="timon" name="filial" />
      <Radio label="Sol Nascente Teresina" id="teresina" name="filial" />

      <SelectDrop label="Status" options={data} />
    </Template>
  )
}