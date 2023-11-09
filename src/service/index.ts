import { AxiosResponse } from "axios";
import Auth from "../Api/Auth";

import { IAuth } from "../context/types";
import Api from "../Api/App";
import { ICatalogo } from "types/catalogos";

export type AuthProps = {
  codUsuario: string;
  codEmpresa: string;
  senha: string;
  versaoApp?: string;
  sistemaOperacional?: string;
};

const basePath = "/bff-plataforma-vendas/v1";

export class SolnascenteApi {
  static Auth(props: AuthProps): Promise<AxiosResponse<IAuth>> {
    const payload = {
      versaoApp: "1.0.0",
      sistemaOperacional: "DESKTOP",
      ...props,
    };
    return Auth.post(`${basePath}/login`, payload);
  }

  static Catalogos({
    codEmpresa,
  }: {
    codEmpresa: string;
  }): Promise<AxiosResponse<ICatalogo>> {
    return Api.get(`${basePath}/catalogos/${codEmpresa}`);
  }
}
