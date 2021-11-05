import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* latin-ext */
  @font-face {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/worksans/v9/QGYsz_wNahGAdqQ43Rh_cqDptfpA4cD3.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/worksans/v9/QGYsz_wNahGAdqQ43Rh_fKDptfpA4Q.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  body {
    font-family: 'Work Sans', sans-serif;
    background: ${(p) => p.theme.color.black};
    color: ${(p) => p.theme.color.white};
    margin: 0;
    padding: 0;
  }

  *,
  *:before,
  *:after {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    font-family: inherit;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
`;

export default GlobalStyle;