import useCalcs from '../src/Presentation/Hooks/useCalcs';
import { renderHook, act, waitFor } from '@testing-library/react-native';
import useProducts from '../src/Presentation/Hooks/useProducts';

describe('useProducts', () => {

  it('deve iniciar com produto vazio e lista de produtos', async () => {
    const { result } = renderHook(() => useProducts());
    expect(result.current.produto.nome).toBe('');
    expect(result.current.produto.taxaJurosAnual).toBe('');
    expect(result.current.produto.prazoMaximoMeses).toBe('');
    expect(Array.isArray(result.current.products)).toBe(true);
  });

  it('deve atualizar nome do produto', () => {
    const { result } = renderHook(() => useProducts());
    act(() => {
      result.current.dispatch({ type: 'SET_NOME', payload: 'Produto Teste' });
    });
    expect(result.current.produto.nome).toBe('Produto Teste');
  });

  it('deve atualizar taxa de juros anual', () => {
    const { result } = renderHook(() => useProducts());
    act(() => {
      result.current.dispatch({ type: 'SET_TAXA_JUROS', payload: '10.5' });
    });
    expect(result.current.produto.taxaJurosAnual).toBe('10.5');
  });

  it('deve atualizar prazo máximo em meses', () => {
    const { result } = renderHook(() => useProducts());
    act(() => {
      result.current.dispatch({ type: 'SET_PRAZO_MAXIMO', payload: '24' });
    });
    expect(result.current.produto.prazoMaximoMeses).toBe('24');
  });

  it('deve resetar o produto', () => {
    const { result } = renderHook(() => useProducts());
    act(() => {
      result.current.dispatch({ type: 'SET_NOME', payload: 'Produto Teste' });
      result.current.dispatch({ type: 'SET_TAXA_JUROS', payload: '10.5' });
      result.current.dispatch({ type: 'SET_PRAZO_MAXIMO', payload: '24' });
    });
    expect(result.current.produto.nome).toBe('Produto Teste');
    act(() => {
      result.current.dispatch({ type: 'RESET', payload: null });
    });
    expect(result.current.produto.nome).toBe('');
    expect(result.current.produto.taxaJurosAnual).toBe('');
    expect(result.current.produto.prazoMaximoMeses).toBe('');
  });

  it('deve chamar registerNewProduct e resetar produto e produto cadastrado deve está na lista', async () => {
    const { result } = renderHook(() => useProducts());
    act(() => {
      result.current.dispatch({ type: 'SET_NOME', payload: 'Produto Teste' });
      result.current.dispatch({ type: 'SET_TAXA_JUROS', payload: '10.5' });
      result.current.dispatch({ type: 'SET_PRAZO_MAXIMO', payload: '24' });
    });
    act(() => {
      result.current.registerNewProduct();
    });
    expect(result.current.produto.nome).toBe('');
    expect(result.current.produto.taxaJurosAnual).toBe('');
    expect(result.current.produto.prazoMaximoMeses).toBe('');
    expect(result.current.products.length).toBe(16);
    await waitFor(() => {
      expect(result.current.products[result.current.products.length -1].nome).toBe('Produto Teste');
    });
  });
});
