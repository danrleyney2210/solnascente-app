import { InputText } from "../../components/atomos/Form/Input";
import { Radio } from "../../components/atomos/Form/radio";
import { Template } from "../template";
import * as S from './styles'

export function Grupos() {
  return (
    <Template>
      <h2>Grupos</h2>
      <InputText label="Cota" placeholder="Cota" type="number" />
      <Radio label="Sol Nascente TIMON" id="timon" name="filial" />
      <Radio label="Sol Nascente Teresina" id="teresina" name="filial" />
    </Template>
  )
}