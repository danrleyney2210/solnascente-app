import { AxiosResponse } from "axios";
import ApiHondaIHS from "Api/ApiHondaIHS";

export type AuthProps = {
  codUsuario: string;
  codEmpresa: string;
  senha: string;
  versaoApp?: string;
  sistemaOperacional?: string;
};

export class HondaIHS {
  static Auth(props: AuthProps): Promise<AxiosResponse<any>> {
    const payload = {
      versaoApp: "1.0.0",
      sistemaOperacional: "DESKTOP",
      ...props,
    };
    return ApiHondaIHS.get("");
  }
}
