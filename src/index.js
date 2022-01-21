import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import App from 'containers/App/Index'

import MainTheme from 'styles/MainTheme'
import GlobalStyle from 'styles/GlobalStyle'

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={MainTheme}>
            <GlobalStyle />

            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
