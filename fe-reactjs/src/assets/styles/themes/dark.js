import defaultTheme from './default';

export default {
  ...defaultTheme,
  backgroundBody: `${defaultTheme.colors.grey[800]}`,
  backgroundPageHeader: `${defaultTheme.colors.black}`,
  backgroundHeaderTable: `${defaultTheme.colors.primary.dark}`,
  backgroundTable: `${defaultTheme.colors.grey[600]}`,
  textColor: `${defaultTheme.colors.white}`,
  textToggleTheme: `${defaultTheme.colors.primary.dark}`,
};
