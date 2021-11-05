const theme = {
  color: {
    black: '#0C0C0D',
    trueBlack: '#000',
    white: '#FAFCFF',
    trueWhite: '#FFF',
    gold: '#FFC700',
  },
};

export default theme;

type CustomTheme = typeof theme;

// this will redeclare the global `DefaultTheme` so it is aware of our custom theme.
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends CustomTheme {}
}
