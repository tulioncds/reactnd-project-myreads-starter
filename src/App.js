import React, {Component} from 'react'
import BooksList from './BooksList'
// import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'

class App extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }
  
  render() {
    return (
      <div>
        <Route path='/' component={BooksList}/>
      </div>
    )
  }
}

export default App
