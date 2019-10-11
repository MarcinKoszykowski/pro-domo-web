const orange = 'hsl(35, 85%, 50%)';
const orangeDark = 'hsl(22, 85%, 50%)';
const greySuperLight = 'hsl(0, 0%, 95%)';
const greyLight = 'hsl(0, 0%, 70%)';
const greyMedium = 'hsl(208, 7%, 46%)';
const grey = 'hsl(0, 0%, 40%)';
const greyDark = 'hsl(212, 15%, 22%)';
const white = 'hsl(0, 0%, 100%)';
const black = 'hsl(0, 0%, 0%)';
const blue = 'hsl(200, 98%, 48%)';
const textInformation = 'hsl(0, 0%, 60%)';
const colorWithOpacity = (color, opacity) => `hsla(${color.replace(/hsl|[()]/g, '')}, ${opacity})`;

export {
  orange,
  orangeDark,
  greySuperLight,
  greyLight,
  greyMedium,
  grey,
  greyDark,
  white,
  black,
  blue,
  textInformation,
  colorWithOpacity,
};
