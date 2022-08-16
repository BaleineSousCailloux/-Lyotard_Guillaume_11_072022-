import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', Helvetica, sans-serif;
  }

  body {
    width: 100%;
    margin: 0;
    background: #ffffff    }
`
function GlobalStyle() {
  return <StyledGlobalStyle />
}
export default GlobalStyle
