import React, { Component } from 'react';
import './App.css';
import {
    Route,
    Switch,
    Link,
} from "react-router-dom";
import Boards from './containers/Boards';
import Board from './containers/Board';
import Default from './components/Default';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <h1>Proman Project Management</h1>
          <Link className="btn-home" to="/"></Link>
        </header> 
        <Switch>
          <Route exact path="/" component={Boards} />
          <Route path="/boards/:id" render={ ({match}) => (
            <Board boardId={match.params.id} />
          )} />
          <Default />
        </Switch>
      </div>
    );
  }
}

export default App;
