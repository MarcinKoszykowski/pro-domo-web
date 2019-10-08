const color = {
  orange: 'hsl(35, 85%, 50%)',
  orangeDark: 'hsl(22, 85%, 50%)',
  greySuperLight: 'hsl(0, 0%, 95%)',
  greyLight: 'hsl(0, 0%, 70%)',
  greyMedium: 'hsl(208, 7%, 46%)',
  grey: 'hsl(0, 0%, 40%)',
  greyDark: 'hsl(212, 15%, 22%)',
  white: 'hsl(0, 0%, 100%)',
  black: 'hsl(0, 0%, 0%)',
  blue: 'hsl(200, 98%, 48%)',
  textInformation: 'hsl(0, 0%, 60%)',
  colorWithOpacity: (color, opacity) => `hsla(${color.replace(/hsl|[()]/g, '')}, ${opacity})`,
};

export default color;
