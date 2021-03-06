import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json';


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  @import url('http://fonts.cdnfonts.com/css/american-typewriter');
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'American Typewriter', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
