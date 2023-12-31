import { AxiosResponse } from "axios";
import Auth from "../Api/Auth";

import { IAuth } from "../context/types";
import ApiHondaVendaDigital from "Api/ApiHondaVendaDigital";
import { ICatalogo } from "types/catalogos";
import { IListaProdutos } from "types/listaProdutos";
import { IdetalheProduto } from "types/detalheProduto";

export type AuthProps = {
  codUsuario: string;
  codEmpresa: string;
  senha: string;
  versaoApp?: string;
  sistemaOperacional?: string;
};

const basePath = "/bff-plataforma-vendas/v1";

export class HondaVendaDigital {
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
    return ApiHondaVendaDigital.get(`${basePath}/catalogos/${codEmpresa}`);
  }

  static ListaProdutos(): Promise<AxiosResponse<IListaProdutos[]>> {
    return ApiHondaVendaDigital.get(`${basePath}/produtos?especieProduto=MOT`);
  }

  static GetDetalheProdutoById({
    codConcessionaria,
    idProduto,
  }: {
    codConcessionaria: string;
    idProduto: number;
  }): Promise<AxiosResponse<IdetalheProduto[]>> {
    return ApiHondaVendaDigital.get(
      `${basePath}/modelos?codConcessionaria=${codConcessionaria}&idProduto=${idProduto}`
    );
  }
}
