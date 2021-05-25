import colors from './colors';
import typography from './typography';
import zIndex from './zIndex';

const theme = {
  colors,
  spacing: (x: number): number => x * 8,
  typography,
  zIndex,
};

export default theme;