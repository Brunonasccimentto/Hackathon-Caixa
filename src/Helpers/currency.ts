import { useCallback } from "react";

interface ICurrencyHelpers {
  formatCurrency: (newValue: string) => string;
  convertCurrencyString: (currencyString: string) => number;
  formatCurrencyNumberToString: (value: number) => string;
}

export const UseCurrencyHelper = (): ICurrencyHelpers =>  {
  const formatCurrency = useCallback((newValue: string) => {
    const digitsOnly = newValue.replace(/\D/g, '');
    const number = Number(digitsOnly) / 100;
    return number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace(' ', ' ');
  }, []);

  const formatCurrencyNumberToString = useCallback((value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value).replace(' ', ' ');
  }, []);

  const convertCurrencyString = useCallback((currencyString: string) => {
    const cleanedString = currencyString
      .replace('R$', '')
      .replace(/\./g, '')
      .replace(',', '.')
      .trim();
    return Number(cleanedString);
  }, []);

  return {
    formatCurrency,
    convertCurrencyString,
    formatCurrencyNumberToString
  };
};

export default UseCurrencyHelper;