import React from 'react'
import ReactDOM from 'react-dom'
import Badge from './components/Badge'
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

const element = <div>
  <h1>Hi I'm Aaron</h1>
  <p>I'm Web Developer</p>
</div>

const container = document.getElementById('app')
ReactDOM.render(<Badge />, container)
