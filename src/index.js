import React from 'react'
import ReactDOM from 'react-dom'
import Badge from './components/Badge'
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

const container = document.getElementById('app')
ReactDOM.render(
  <Badge
    firstName= 'Aaron'
    lastName= 'Isaacs'
    jobTitle= 'Full Stack Developer'
    twitter= 'isaacs_ing'
    avatarUrl= 'https://es.gravatar.com/userimage/159727741/b202ede4610fa5c402ee58da070422e8.png?size=200'
    
  />, 
  container
)
