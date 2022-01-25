import defaultTheme from './default';

export default {
  ...defaultTheme,
  backgroundBody: `${defaultTheme.colors.grey[200]}`,
  backgroundPageHeader: `${defaultTheme.colors.primary.dark}`,
  backgroundHeaderTable: `${defaultTheme.colors.primary.main}`,
  backgroundTable: `${defaultTheme.colors.white}`,
  textColor: `${defaultTheme.colors.primary.dark}`,
  textToggleTheme: `${defaultTheme.colors.white}`,
};
