import { default as Amplify, default as AWSExports } from 'aws-amplify'
import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import App from './App'
import './index.css'
import * as serviceWorker from './serviceWorker'

const GlobalStyle = createGlobalStyle`
:root {
  --color-white: #fff;
  --color-green: #717b70;
  --color-text: var(--color-white);
  --color-background: var(--color-green);
  --font-mono:
    source-code-pro,
    Menlo,
    Monaco,
    Consolas,
    'Courier New',
    monospace;
  --font-sans:
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    sans-serif;
  --type-base: calc(1.6em + 0.5vw);
  --type-xxx-small: 55%;
  --type-xx-small: 65%;
  --type-x-small: 75%;
  --type-small: 85%;
  --type-medium: 100%;
  --type-large: 125%;
  --type-x-large: 150%;
  --type-xx-large: 200%;
  --type-xxx-large: 300%
}

body {
  margin: 0;
  font-family: var(--font-sans);
  font-size:var(--type-base);
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

code {
  font-family: var(--font-mono)
}
`

Amplify.configure(AWSExports)

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
