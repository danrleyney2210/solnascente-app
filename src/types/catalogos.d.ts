export interface ICatalogo {
  catalogoModelos: CatalogoModelos;
  catalogoPrecos: CatalogoPrecos;
}

export interface CatalogoModelos {
  produtos: Produto[];
  planosVenda: PlanosVenda[];
  modelos: Modelo[];
  prazos: Prazo[];
}

export interface Modelo {
  dscModelo: string;
  flgCatalogoModelo: boolean;
  codModelo: string;
  codEspecieModelo: CodEspecie;
  valorParcelaLabel: null;
  codEspecie: CodEspecie;
  idModelo: number;
}

export enum CodEspecie {
  Car = "CAR",
  Mot = "MOT",
}

export interface PlanosVenda {
  enmIndicadorPlano: EnmIndicadorPlano;
  perLanceFixo: null | string;
  idProduto: number;
  enmTipoPlano: EnmTipoPlano;
  codPlanoVendas: number;
  vlrPerFundoReserva: number;
  idPrazo: number;
  flgSeguro: boolean;
  vlrPerTaxaAdministracao: number;
  vlrPerTaxaAdesao: number;
  idPlanoVendas: number;
  codTipoRegulamento: CodTipoRegulamento;
}

export enum CodTipoRegulamento {
  Regcotnov = "REGCOTNOV",
  Regcotrep = "REGCOTREP",
}

export enum EnmIndicadorPlano {
  P = "P",
  R = "R",
}

export enum EnmTipoPlano {
  E = "E",
  P = "P",
}

export interface Prazo {
  codPrazo: number;
  idPrazo: number;
  perPagoMensal: number;
}

export interface Produto {
  codEmpresaHonda: CodEmpresaHonda;
  idProduto: number;
  dscProduto: string;
  codProduto: number;
}

export enum CodEmpresaHonda {
  Cnh = "CNH",
}

export interface CatalogoPrecos {
  precos: Preco[];
  vencimentos: Vencimento[];
  modelosPlano: ModelosPlano[];
}

export interface ModelosPlano {
  dataPrevisaoGrupo: Date | null;
  idModelo: number;
  idPlanoVendas: number;
  dataInicioVigencia: null;
  idModeloPlano: number;
}

export interface Preco {
  idRegionalizacaoTabelaPreco: number;
  codEmpresaHonda: CodEmpresaHonda;
  siglaUf: SiglaUf;
  vlrParcela: string;
  vlrPrecoBemBaseDocTo: string;
  codPrazo: number;
  perPagmentoMensal: number;
  idModelo: number;
  vlrPrecoCategoriaSeguro: string;
  idPlanoVendas: number;
  vlrPrecoBemCategoria: string;
}

export enum SiglaUf {
  Pi = "PI",
}

export interface Vencimento {
  idVencimento: number;
  diaVencimento: number;
  idPlanoVendas: number;
}
