import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-image: url('/images/bg.gif');
    background-repeat: no-repeat;
    background-size: cover;
    no-repeat center center fixed;

    img { 
      max-length: 100%;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
