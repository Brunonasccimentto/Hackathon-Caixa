
export type Produto = {
  id?: number;
  nome: string;
  taxaJurosAnual: number;
  prazoMaximoMeses: number;
};

export type ProdutoDTO = {
  nome: string;
  taxaJurosAnual: string;
  prazoMaximoMeses: string;
};


