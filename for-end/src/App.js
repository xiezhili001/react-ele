import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { setCity2 } from '@/store/actions';

import Home from './views/Home';
import detailCity from './views/detailCity';
import store from './store';
import City from './views/City';
import Rules from './views/Rules/index';
import Order from '@/components/Order';

import login from './views/Login/index';

class App extends React.Component {

  componentWillMount() {
    store.dispatch(setCity2())
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/detailCity" component={detailCity}></Route>
          <Route path="/login" component={login}></Route>
          <Route path="/rules" component={Rules}></Route>
          <Route path="/city" component={City}></Route>
          {/* <Route path="/" component={Home}></Route> */}
              <Route path="/" component={Order}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
