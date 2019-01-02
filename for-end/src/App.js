import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { setCity2 } from '@/store/actions';

import Home from './views/Home';
import City from './views/City';
import store from './store';
import login from './views/Login/index';

class App extends React.Component {

  componentWillMount() {
    store.dispatch(setCity2())
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={login}></Route>
          <Route path="/city" component={City}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
