import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <main className='App'>
          <Route exact path='/' component={App}/>
      </main>
    );
  }
}

export default App;

