import { AxiosResponse } from "axios";
import Api from "../Api";
import { IAuth } from "../types/auth";

const basePath = "";

type AuthProps = {
  codUsuario: string;
  codEmpresa: string;
  senha: string;
  versaoApp?: string;
  sistemaOperacional?: string;
};

export class SolnascenteApi {
  static Auth(props: AuthProps): Promise<AxiosResponse<IAuth>> {
    const payload = {
      versaoApp: "1.0.0",
      sistemaOperacional: "DESKTOP",
      ...props,
    };
    return Api.post("/bff-plataforma-vendas/v1/login", payload, {
      headers: {
        Authorization: process.env.REACT_APP_AXIOS_BASIC_TOKEN,
      },
    });
  }
}
