const orange = 'hsl(35, 85%, 50%)';
const orange_dark = 'hsl(22, 85%, 50%)';
const grey_super_light = 'hsl(0, 0%, 95%)';
const grey_light = 'hsl(0, 0%, 70%)';
const grey_medium = 'hsl(208, 7%, 46%)';
const grey = 'hsl(0, 0%, 40%)';
const grey_dark = 'hsl(212, 15%, 22%)';
const white = 'hsl(0, 0%, 100%)';
const black = 'hsl(0, 0%, 0%)';
const blue = 'hsl(200, 98%, 48%)';
const text_information = 'hsl(0, 0%, 60%)';
const colorWithOpacity = (color, opacity) => `hsla(${color.replace(/hsl|[()]/g, '')}, ${opacity})`;

export {
  orange,
  orange_dark,
  grey_super_light,
  grey_light,
  grey_medium,
  grey,
  grey_dark,
  white,
  black,
  blue,
  text_information,
  colorWithOpacity,
};
