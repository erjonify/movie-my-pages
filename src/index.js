import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import App from 'containers/App'

import MainTheme from 'styles/mainTheme'
import GlobalStyle from 'styles/globalStyle'

import store from 'store'

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={MainTheme}>
            <GlobalStyle />
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
