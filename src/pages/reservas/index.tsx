import { Radio } from "../../components/atomos/Form/radio";
import { Template } from "../template";

export function Reservas() {
  return (
    <Template title={'Reserva'}>
      <Radio label="Sol Nascente TIMON" id="timon" name="filial" />
      <Radio label="Sol Nascente Teresina" id="teresina" name="filial" />
    </Template>
  )
}