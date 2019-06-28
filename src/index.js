import React from 'react'
import ReactDOM from 'react-dom'

const name = 'Kathe'
// const element = React.createElement('a', {href: 'https://platzi.com'}, 'Go to platzi')
// const element = React.createElement('h1', {href: 'https://platzi.com'}, `Hi, I'm ${name}`)

const jsx = <div>
  <h1>Hi I'm Aaron</h1>
  <p>I'm Web Developer</p>
</div>

const container = document.getElementById('app')
ReactDOM.render(jsx, container)
