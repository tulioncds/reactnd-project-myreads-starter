import React, {Component} from 'react'
import BooksList from './BooksList'
import BookSearch from './BookSearch'
// import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'

class App extends Component {
  
  render() {
    return (
      <div>
        <Route path='/' component={BooksList}/>
        <Route path='/search' component={BookSearch} />
      </div>
    )
  }
}

export default App
