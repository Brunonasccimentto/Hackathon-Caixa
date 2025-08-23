import useCalcs from '../src/Presentation/Hooks/useCalcs';
import { renderHook, act, waitFor } from '@testing-library/react-native';

describe('useCalcs', () => {
  const testCasesSAC = [
    {valorEmprestimo: 1000, meses: 12, juros: 100.5, expected: {valorTotalComJuros: 1387.94, primeiraParcela: 143.02, taxaDeJurosMensal: 5.9684}},
    {valorEmprestimo: 50000, meses: 24, juros: 18.77, expected: {valorTotalComJuros: 59023.83, primeiraParcela: 2805.24, taxaDeJurosMensal: 1.4438}},
    {valorEmprestimo: 32000, meses: 6, juros: 15.6, expected: {valorTotalComJuros: 33361.22, primeiraParcela: 5722.25, taxaDeJurosMensal: 1.2154}},
    {valorEmprestimo: 30000, meses: 18, juros: 12.1, expected: {valorTotalComJuros: 32725.70, primeiraParcela: 1953.58, taxaDeJurosMensal: 0.9564}},
    {valorEmprestimo: 15000, meses: 10, juros: 9.2, expected: {valorTotalComJuros: 15607.30, primeiraParcela: 1610.42, taxaDeJurosMensal: 0.7361}},
    {valorEmprestimo: 8200, meses: 36, juros: 7.3, expected: {valorTotalComJuros: 9093.33, primeiraParcela: 276.07, taxaDeJurosMensal: 0.5889}},
    {valorEmprestimo: 2555, meses: 8, juros: 11.80, expected: {valorTotalComJuros: 2662.37, primeiraParcela: 343.23, taxaDeJurosMensal: 0.9338}},
    {valorEmprestimo: 44444, meses: 20, juros: 13.33, expected: {valorTotalComJuros: 49335.72, primeiraParcela: 2688.08, taxaDeJurosMensal: 1.0482}},
    {valorEmprestimo: 1201, meses: 12, juros: 52.21, expected: {valorTotalComJuros: 1479.13, primeiraParcela: 142.87, taxaDeJurosMensal: 3.5628}},
    {valorEmprestimo: 60001, meses: 30, juros: 10.7453, expected: {valorTotalComJuros: 67944.73, primeiraParcela: 2512.53, taxaDeJurosMensal: 0.8542}},
    {valorEmprestimo: 3598, meses: 15, juros: 14.22, expected: {valorTotalComJuros: 3918.69, primeiraParcela: 279.95, taxaDeJurosMensal: 1.1141}},
    {valorEmprestimo: 90740, meses: 40, juros: 16.11, expected: {valorTotalComJuros: 114038.83, primeiraParcela: 3405.03, taxaDeJurosMensal: 1.2525}},
    {valorEmprestimo: 22100, meses: 9, juros: 10.66, expected: {valorTotalComJuros: 23036.68, primeiraParcela: 2642.89, taxaDeJurosMensal: 0.8477}},
    {valorEmprestimo: 7351, meses: 25, juros: 8.88, expected: {valorTotalComJuros: 8030.92, primeiraParcela: 346.34, taxaDeJurosMensal: 0.7115}},
    {valorEmprestimo: 1808, meses: 7, juros: 12.56, expected: {valorTotalComJuros: 1879.66, primeiraParcela: 276.20, taxaDeJurosMensal: 0.9908}},
  ];

  testCasesSAC.forEach(({valorEmprestimo, meses, juros, expected}, index) => {
    it(`SAC calcula corretamente para caso ${index + 1}`, () => {
      const hookResult = renderHook(() => useCalcs()).result.current;

      const resultado = hookResult.sac(valorEmprestimo, meses, juros);
      expect(resultado.tipo).toBe('SAC');
      expect(resultado.parcelas.length).toBe(meses);
      expect(resultado.valorTotalComJuros).toBeCloseTo(expected.valorTotalComJuros);
      expect(resultado.taxaDeJurosMensal).toBeCloseTo(expected.taxaDeJurosMensal, 4);
      expect(resultado.parcelas[0].parcela).toBeCloseTo(expected.primeiraParcela, 2);
    });
  });

  const testCasesPRICE = [
    {valorEmprestimo: 1000, meses: 12, juros: 100.5, expected: {valorTotalComJuros: 1428.84, primeiraParcela: 119.07, taxaDeJurosMensal: 5.9684}},
    {valorEmprestimo: 50000, meses: 24, juros: 18.77, expected: {valorTotalComJuros: 59518.71, primeiraParcela: 2479.95, taxaDeJurosMensal: 1.4438}},
    {valorEmprestimo: 32000, meses: 6, juros: 15.6, expected: {valorTotalComJuros: 33374.92, primeiraParcela: 5562.49, taxaDeJurosMensal: 1.2154}},
    {valorEmprestimo: 30000, meses: 18, juros: 12.1, expected: {valorTotalComJuros: 32799.18, primeiraParcela: 1822.18, taxaDeJurosMensal: 0.9564}},
    {valorEmprestimo: 15000, meses: 10, juros: 9.2, expected: {valorTotalComJuros: 15613.98, primeiraParcela: 1561.40, taxaDeJurosMensal: 0.7361}},
    {valorEmprestimo: 8200, meses: 36, juros: 7.3, expected: {valorTotalComJuros: 9123.91, primeiraParcela: 253.44, taxaDeJurosMensal: 0.5889}},
    {valorEmprestimo: 2555, meses: 8, juros: 11.80, expected: {valorTotalComJuros: 2663.53, primeiraParcela: 332.94, taxaDeJurosMensal: 0.9338}},
    {valorEmprestimo: 44444, meses: 20, juros: 13.33, expected: {valorTotalComJuros: 49497.14, primeiraParcela: 2474.86, taxaDeJurosMensal: 1.0482}},
    {valorEmprestimo: 1201, meses: 12, juros: 52.21, expected: {valorTotalComJuros: 1496.92, primeiraParcela: 124.74, taxaDeJurosMensal: 3.5628}},
    {valorEmprestimo: 60001, meses: 30, juros: 10.7453, expected: {valorTotalComJuros: 68270.93, primeiraParcela: 2275.70, taxaDeJurosMensal: 0.8542}},
    {valorEmprestimo: 3598, meses: 15, juros: 14.22, expected: {valorTotalComJuros: 3926.98, primeiraParcela: 261.80, taxaDeJurosMensal: 1.1141}},
    {valorEmprestimo: 90740, meses: 40, juros: 16.11, expected: {valorTotalComJuros: 115916.14, primeiraParcela: 2897.90, taxaDeJurosMensal: 1.2525}},
    {valorEmprestimo: 22100, meses: 9, juros: 10.66, expected: {valorTotalComJuros: 23047.22, primeiraParcela: 2560.80, taxaDeJurosMensal: 0.8477}},
    {valorEmprestimo: 7351, meses: 25, juros: 8.88, expected: {valorTotalComJuros: 8050.19, primeiraParcela: 322.01, taxaDeJurosMensal: 0.7115}},
    {valorEmprestimo: 1808, meses: 7, juros: 12.56, expected: {valorTotalComJuros: 1880.36, primeiraParcela: 268.62, taxaDeJurosMensal: 0.9908}},
  ]

  testCasesPRICE.forEach(({valorEmprestimo, meses, juros, expected}, index) => {
    it(`PRICE calcula corretamente para caso ${index + 1}`, () => {
      const hookResult = renderHook(() => useCalcs()).result.current;

      const resultado = hookResult.price(valorEmprestimo, meses, juros);
      expect(resultado.tipo).toBe('PRICE');
      expect(resultado.parcelas.length).toBe(meses);
      expect(resultado.valorTotalComJuros).toBeCloseTo(expected.valorTotalComJuros);
      expect(resultado.taxaDeJurosMensal).toBeCloseTo(expected.taxaDeJurosMensal, 4);
      expect(resultado.parcelas[0].parcela).toBeCloseTo(expected.primeiraParcela, 2);
    });

  });

  it('calcAll atualiza resultSimulation com SAC e PRICE', async () => {
    const { result } = renderHook(() => useCalcs());

    act(() => {
      result.current.calcAll(1200, 12, 12);
    });

    await waitFor(() => {
      expect(result.current.resultSimulation.length).toBe(2);
      expect(result.current.resultSimulation[0].tipo).toBe('SAC');
      expect(result.current.resultSimulation[1].tipo).toBe('PRICE');
    });
  });


  it('clearSimulation limpa resultSimulation', async () => {
    const {result} = renderHook(() => useCalcs());

    act(() => {
      result.current.calcAll(1200, 12, 12);
    });

    await waitFor(()=> {
      expect(result.current.resultSimulation.length).toBe(2);
      act(() => {
        result.current.clearSimulation()
      });
      expect(result.current.resultSimulation.length).toBe(0);
    })
  });
});
