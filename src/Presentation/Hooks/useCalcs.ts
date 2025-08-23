import { useState } from "react";

export interface IuseCalcs {
    sac: (valorEmprestimo: number, meses: number, juros: number) => returnSimulation;
    price: (valorEmprestimo: number, meses: number, juros: number) => returnSimulation;
    calcAll: (valorEmprestimo: number, meses: number, juros: number) => void;
    clearSimulation: () => void;
    resultSimulation: returnSimulation[];
}

export type calcParcelas = {
    parcela: number;
    juros: number;
    amortizacao: number;
    saldoDevedor: number;
}

type installmentType = 'SAC' | 'PRICE';

export type returnSimulation = {
    tipo: installmentType;
    parcelas: calcParcelas[];
    taxaDeJurosMensal: number;
    valorTotalComJuros: number;    
}
      
const useCalcs = (): IuseCalcs => {
    const [resultSimulation, setResultSimulation] = useState<returnSimulation[]>([]);

    const sac = (valorEmprestimo: number, meses: number, juros: number) => {
        const valorAmortizacao = valorEmprestimo / meses;
        const taxaDeJurosMensal = (Math.pow(1 + (juros / 100), 1 / 12) - 1) ;
        let valorTotalComJuros = 0;

        let resultado: returnSimulation = {
            tipo: 'SAC',
            parcelas: [],
            taxaDeJurosMensal: Number((taxaDeJurosMensal * 100).toFixed(4)),
            valorTotalComJuros: valorTotalComJuros,
        }

        for (let i = 0; i < meses; i++) {
            const saldoDevedorAnterior = valorEmprestimo - (valorAmortizacao * i);
            const valorJuros = saldoDevedorAnterior * taxaDeJurosMensal;
            const parcela = valorAmortizacao + valorJuros;

            valorTotalComJuros += parcela;

            resultado.parcelas.push({
                parcela: parcela,
                juros: valorJuros,
                amortizacao: valorAmortizacao,
                saldoDevedor: saldoDevedorAnterior - valorAmortizacao
            });
        }

        resultado.valorTotalComJuros = Number(valorTotalComJuros.toFixed(2));
        return resultado;
    }

    const price = (valorEmprestimo: number, meses: number, juros: number) => {
        const taxaDeJurosMensal = (Math.pow(1 + (juros / 100), 1 / 12) - 1) ;

        const parcela = valorEmprestimo * (taxaDeJurosMensal / (1 - Math.pow(1 + taxaDeJurosMensal, -meses)));
        let saldoDevedor = valorEmprestimo;
        let valorTotalComJuros = 0;

         let resultado: returnSimulation = {
            tipo: 'PRICE',
            parcelas: [],
            taxaDeJurosMensal: Number((taxaDeJurosMensal * 100).toFixed(4)),
            valorTotalComJuros: valorTotalComJuros,
        }

        for (let i = 0; i < meses; i++) {
            const valorJuros = saldoDevedor * taxaDeJurosMensal;
            const valorAmortizacao = parcela - valorJuros;
            saldoDevedor -= valorAmortizacao;

            valorTotalComJuros += parcela;

            resultado.parcelas.push({
                parcela: parcela,
                juros: valorJuros,
                amortizacao: valorAmortizacao,
                saldoDevedor: saldoDevedor
            });
        }

        resultado.valorTotalComJuros = valorTotalComJuros;
        return resultado;
    }

    const calcAll = (valorEmprestimo: number, meses: number, juros: number) => {
        const sacResult = sac(valorEmprestimo, meses, juros);
        const priceResult = price(valorEmprestimo, meses, juros);

        // console.log('Resultado SAC:', sacResult);
        // console.log('Resultado PRICE:', priceResult);

        setResultSimulation([sacResult, priceResult]);
    }

    const clearSimulation = ()=> {
        setResultSimulation([])
    }
   
    return {
        sac,
        price,
        calcAll,
        resultSimulation,
        clearSimulation
    };
};

export default useCalcs;
