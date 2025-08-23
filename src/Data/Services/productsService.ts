import { Produto, ProdutoDTO } from "../../Domain/Models/Products";

export interface ProdutoServiceProtocol {
  getProdutos(): Produto[];
  postProduto(produto: ProdutoDTO): void;
}

class ProdutoService implements ProdutoServiceProtocol {

    getProdutos(): Produto[] {
        return produtos;
    // Nao tem API no desafio, entao vamos retornar os produtos mockados
    }   

    postProduto(produto: ProdutoDTO): void {
        const newproduct: Produto = {
            id: produtos.length + 1,
            nome: produto.nome,
            taxaJurosAnual: Number(produto.taxaJurosAnual),
            prazoMaximoMeses: Number(produto.prazoMaximoMeses),
        }
    
        produtos.push(newproduct)
    }
}

export const ProdutoServiceFactory = {
  create(): ProdutoServiceProtocol {
    return new ProdutoService();
  },
};

var produtos: Produto[] = [
  { id: 1, nome: "Crédito Pessoal", taxaJurosAnual: 56.4, prazoMaximoMeses: 36 },
  { id: 2, nome: "Financiamento Imobiliário", taxaJurosAnual: 11.1, prazoMaximoMeses: 360 },
  { id: 3, nome: "Empréstimo Consignado", taxaJurosAnual: 26.0, prazoMaximoMeses: 96 },
  { id: 4, nome: "Cartão de Crédito", taxaJurosAnual: 445.0, prazoMaximoMeses: 12 },
  { id: 5, nome: "Microcrédito", taxaJurosAnual: 11.8, prazoMaximoMeses: 24 },
  { id: 6, nome: "Crédito Rural", taxaJurosAnual: 11.8, prazoMaximoMeses: 120 },
  { id: 7, nome: "Financiamento de Veículos", taxaJurosAnual: 24.0, prazoMaximoMeses: 72 },
  { id: 8, nome: "Antecipação de FGTS", taxaJurosAnual: 20.0, prazoMaximoMeses: 18 },
  { id: 9, nome: "Crédito Universitário", taxaJurosAnual: 11.8, prazoMaximoMeses: 60 },
  { id: 10, nome: "Crédito para Energia Solar", taxaJurosAnual: 11.8, prazoMaximoMeses: 84 },
  { id: 11, nome: "Crédito para Reforma", taxaJurosAnual: 24.0, prazoMaximoMeses: 48 },
  { id: 12, nome: "Crédito para Equipamentos", taxaJurosAnual: 24.0, prazoMaximoMeses: 60 },
  { id: 13, nome: "Crédito para Capital de Giro", taxaJurosAnual: 24.3, prazoMaximoMeses: 36 },
  { id: 14, nome: "Crédito Verde", taxaJurosAnual: 11.8, prazoMaximoMeses: 72 },
  { id: 15, nome: "Crédito para Turismo", taxaJurosAnual: 24.0, prazoMaximoMeses: 24 }
];