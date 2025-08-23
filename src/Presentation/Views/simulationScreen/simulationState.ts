import { Dispatch, useEffect, useReducer, useState } from "react";
import { Produto } from "../../../Domain/Models/Products";
import { ProdutoServiceFactory } from "../../../Data/Services/productsService";
import useCalcs, { returnSimulation } from "../../Hooks/useCalcs";
import UseCurrencyHelper from "../../../Helpers/currency";

interface IuseSimulationState {
  products: Produto[];
  simulation: Simulation;
  dispatch: Dispatch<{ type: string; payload: any }>;
  resultSimulation: returnSimulation[];
  makeSimulation: () => void;
  clearSimulation: () => void;
}

type Simulation = {
    produto: string;
    valorEmprestimo: string;
    maxMeses: number;
    meses: string;
}

const initialState: Simulation = {
    produto: '',
    valorEmprestimo: '',
    maxMeses: 0,
    meses: '',
};

const useSimulationState = (): IuseSimulationState => {
    const [products, setProducts] = useState<Produto[]>([]);
    const [simulation, dispatch] = useReducer(simulatorReducer, initialState);
    const {calcAll, resultSimulation, clearSimulation} = useCalcs();
    const {convertCurrencyString} = UseCurrencyHelper();
    
    useEffect(() => {
        const data = ProdutoServiceFactory.create().getProdutos()
        setProducts(data);
    }, []);

    function simulatorReducer(state: Simulation, action: { type: string; payload: any }) {
    
        switch (action.type) {
        case 'SET_PRODUTO':
            return { ...state, produto: action.payload };
        case 'SET_MAX_MESES':
            return { ...state, maxMeses: action.payload };
        case 'SET_VALOR_EMPRESTIMO':
            return { ...state, valorEmprestimo: action.payload};
        case 'SET_MESES':
            if(action.payload > state.maxMeses) {
                return { ...state, meses: state.maxMeses.toString() };
            }
            return { ...state, meses: action.payload };
        default:
            return state;
        }
    }

    function makeSimulation() {
        const valorEmprestimo = convertCurrencyString(simulation.valorEmprestimo);
        const meses = Number(simulation.meses)
        const produto = products.find(p => p.nome === simulation.produto);
        
        if (produto && meses <= produto.prazoMaximoMeses && valorEmprestimo > 0) {
            calcAll(valorEmprestimo, meses, produto.taxaJurosAnual);
        }
    }
        
    return {
        products,
        simulation,
        dispatch: (action) => dispatch(action),
        makeSimulation,
        clearSimulation,
        resultSimulation
    };
};

export default useSimulationState;
