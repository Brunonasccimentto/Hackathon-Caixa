import useCalcs from '../src/Presentation/Hooks/useCalcs';
import { renderHook, act, waitFor } from '@testing-library/react-native';
import useProducts from '../src/Presentation/Hooks/useProducts';

import useSimulationState from '../src/Presentation/Views/simulationScreen/simulationState';

describe('useSimulationState', () => {
  it('deve iniciar com simulation vazio e lista de produtos', async () => {
    const { result } = renderHook(() => useSimulationState());
    expect(result.current.simulation.produto).toBe('');
    expect(result.current.simulation.valorEmprestimo).toBe('');
    expect(result.current.simulation.maxMeses).toBe(0);
    expect(result.current.simulation.meses).toBe('');
    expect(Array.isArray(result.current.products)).toBe(true);
  });

  it('deve atualizar produto', () => {
    const { result } = renderHook(() => useSimulationState());
    act(() => {
      result.current.dispatch({ type: 'SET_PRODUTO', payload: 'Produto Teste' });
    });
    expect(result.current.simulation.produto).toBe('Produto Teste');
  });

  it('deve atualizar valor do empréstimo', () => {
    const { result } = renderHook(() => useSimulationState());
    act(() => {
      result.current.dispatch({ type: 'SET_VALOR_EMPRESTIMO', payload: '5000' });
    });
    expect(result.current.simulation.valorEmprestimo).toBe('5000');
  });

  it('deve atualizar maxMeses', () => {
    const { result } = renderHook(() => useSimulationState());
    act(() => {
      result.current.dispatch({ type: 'SET_MAX_MESES', payload: 36 });
    });
    expect(result.current.simulation.maxMeses).toBe(36);
  });

  it('deve atualizar meses respeitando maxMeses', () => {
    const { result } = renderHook(() => useSimulationState());
    act(() => {
      result.current.dispatch({ type: 'SET_MAX_MESES', payload: 24 });
      result.current.dispatch({ type: 'SET_MESES', payload: '30' });
    });
    expect(result.current.simulation.meses).toBe('24');
    act(() => {
      result.current.dispatch({ type: 'SET_MESES', payload: '12' });
    });
    expect(result.current.simulation.meses).toBe('12');
  });

  it('makeSimulation deve popular resultSimulation quando dados válidos', async () => {
    const { result } = renderHook(() => useSimulationState());
    act(() => {
      result.current.dispatch({ type: 'SET_PRODUTO', payload: result.current.products[0].nome });
      result.current.dispatch({ type: 'SET_VALOR_EMPRESTIMO', payload: '1000' });
      result.current.dispatch({ type: 'SET_MAX_MESES', payload: result.current.products[0].prazoMaximoMeses });
      result.current.dispatch({ type: 'SET_MESES', payload: 12 });
    });
    act(() => {
      result.current.makeSimulation();
    });
    await waitFor(() => {
      expect(result.current.resultSimulation.length).toBe(2);
      expect(result.current.resultSimulation[0].tipo).toBeDefined();
    });
  });

  it('clearSimulation deve limpar resultSimulation', async () => {
    const { result } = renderHook(() => useSimulationState());
    act(() => {
      result.current.dispatch({ type: 'SET_PRODUTO', payload: result.current.products[0].nome });
      result.current.dispatch({ type: 'SET_VALOR_EMPRESTIMO', payload: '1000' });
      result.current.dispatch({ type: 'SET_MAX_MESES', payload: result.current.products[0].prazoMaximoMeses });
      result.current.dispatch({ type: 'SET_MESES', payload: 12 });
      result.current.makeSimulation();
    });
    act(() => {
      result.current.clearSimulation();
    });
    expect(result.current.resultSimulation.length).toBe(0);
  });
});
