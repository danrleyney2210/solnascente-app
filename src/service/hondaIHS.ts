import { AxiosResponse } from "axios";
import ApiHondaIHS from "Api/ApiHondaIHS";
import { IAthIHS } from "types/authIHS";

type HondaIHSAuthProps = {
  codEmpresa: string;
  codUsuario: string;
  senha: string;
  captchaReponseKey: string;
  token?: string;
};

export class HondaIHS {
  static Auth(props: HondaIHSAuthProps): Promise<AxiosResponse<IAthIHS>> {
    const payload = { ...props, token: "" };
    return ApiHondaIHS.post("/login", payload);
  }
}
