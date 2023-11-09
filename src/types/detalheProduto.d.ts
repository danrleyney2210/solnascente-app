export interface IdetalheProduto {
  imagemPrincipal: string;
  carrossel: Carrossel[];
  tipo: string;
  caracteristicas: Caracteristica[];
  cores: Core[];
  nome: string;
  id: string;
  idModelo: string;
  baseLink: string;
  slug: null | string;
}

export interface Caracteristica {
  valor: string;
  nome: string;
  icone: string;
}

export interface Carrossel {
  urls: string[];
  corId: string;
}

export interface Core {
  nome: string;
  hex: string;
  id: string;
}
