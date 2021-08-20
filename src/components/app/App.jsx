import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Villagers from '../../containers/Villagers';
import DetailPage from '../../containers/VillagerDetailContainer';
import './App.css';

export default function App() {
  return <div className="app">
    <Router>
      <Switch>
        <Route exact path="/" render={routerProps => (
          <Villagers {...routerProps} />
        )} />

        <Route exact path="/villagers/:_id" render={routerProps => (
          <DetailPage {...routerProps} />
        )} />

        <Redirect to="/" />
      </Switch>
    </Router>
  </div>
}
