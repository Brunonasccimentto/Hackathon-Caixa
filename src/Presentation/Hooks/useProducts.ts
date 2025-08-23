import { Dispatch, useEffect, useReducer, useState } from "react";
import { Produto, ProdutoDTO } from "../../Domain/Models/Products";
import { ProdutoServiceFactory } from "../../Data/Services/productsService";
import { Alert } from "react-native";

interface IuseProducts {
  products: Produto[];
  produto: ProdutoDTO;
  dispatch: Dispatch<{ type: string; payload: any }>;
  registerNewProduct: ()=> void;
}

const initialState: ProdutoDTO = {
    nome: '',
    taxaJurosAnual: '',
    prazoMaximoMeses: '',
};
      
const useProducts = (): IuseProducts => {
   const [products, setProducts] = useState<Produto[]>([]);
   const [produto, dispatch] = useReducer(produtoReducer, initialState);
   
    useEffect(() => {
        // Fazendo chamada diretamente no service para obter os produtos
        // não há regra de negócio para justificar o uso do useCase
        const products = ProdutoServiceFactory.create().getProdutos()
        setProducts(products);
    }, []);

    function produtoReducer(state: ProdutoDTO, action: { type: string; payload: any }) {
      switch (action.type) {
        case 'SET_NOME':
          return { ...state, nome: action.payload };
        case 'SET_TAXA_JUROS':
          return { ...state, taxaJurosAnual: action.payload };
        case 'SET_PRAZO_MAXIMO':
          return { ...state, prazoMaximoMeses: action.payload };
        case 'RESET':
          return initialState;
        default:
          return state;
      }
    }

    const registerNewProduct = ()=> {
      ProdutoServiceFactory.create().postProduto(produto)
      dispatch({type: 'RESET', payload: null});
      Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');
    }
      
    return {
        products,
        produto,
        dispatch: (action) => dispatch(action),
        registerNewProduct
    };
};

export default useProducts;
