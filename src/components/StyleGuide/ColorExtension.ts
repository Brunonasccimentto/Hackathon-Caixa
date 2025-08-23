// ColorExtension.ts

export const Colors = {
  buttonOrange: '#D87B00',

  bgNeutral1: '#FFFFFF',
  bgNeutral2: '#F7FAFA',
  bgNeutral3: '#EBF1F2',
  bgNeutral7: '#404B52',

  textPrimaryHighlight: '#005CA9',
  textDarkGraphite: '#3A4859',
  textWhite: '#FFFFFF',

  contentNeutral: '#64747A',
  primaryFocus: '#0F92FF',
  primaryHighlight: '#005CA9',

  disabled: '#edf0f0',
  disabledButton: '#22292E5C',
  shadow: 'rgba(14, 31, 53, 0.05)', // "#0E1F350D" convertido para RGBA
};

// Função utilitária para converter hex em rgba (opcional)
export function hexToRgba(hex: string, alpha = 1): string {
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const num = parseInt(c, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r},${g},${b},${alpha})`;
}