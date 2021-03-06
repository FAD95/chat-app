import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body{ 
        min-height: 100vh;
        background: #614385;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #516395, #614385);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #516395, #614385); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        margin: 0;
        padding: 0;
    }
`
export default GlobalStyles
