import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App.jsx'

global.l = console.log

ReactDom.render(<App/>, document.getElementById('app'))