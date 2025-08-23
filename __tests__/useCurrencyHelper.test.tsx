import { renderHook } from "@testing-library/react-native";
import UseCurrencyHelper from "../src/Helpers/currency";

describe('UseCurrencyHelper', () => {
  it('formatCurrency deve formatar string para moeda BRL', () => {
    const { result } = renderHook(() => UseCurrencyHelper());
    expect(result.current.formatCurrency('123456')).toBe('R$ 1.234,56');
    expect(result.current.formatCurrency('100')).toBe('R$ 1,00');
    expect(result.current.formatCurrency('0')).toBe('R$ 0,00');
    expect(result.current.formatCurrency('')).toBe('R$ 0,00');
  });


  it('formatCurrencyNumberToString deve formatar número para moeda BRL', () => {
    const { result } = renderHook(() => UseCurrencyHelper());
    expect(result.current.formatCurrencyNumberToString(1234.56)).toBe('R$ 1.234,56');
    expect(result.current.formatCurrencyNumberToString(1)).toBe('R$ 1,00');
    expect(result.current.formatCurrencyNumberToString(0)).toBe('R$ 0,00');
  });

  it('convertCurrencyString deve converter string de moeda para número', () => {
    const { result } = renderHook(() => UseCurrencyHelper());
    expect(result.current.convertCurrencyString('R$1.234,56')).toBeCloseTo(1234.56);
    expect(result.current.convertCurrencyString('R$1,00')).toBeCloseTo(1);
    expect(result.current.convertCurrencyString('R$0,00')).toBeCloseTo(0);
    expect(result.current.convertCurrencyString('1234,56')).toBeCloseTo(1234.56);
  });
});
