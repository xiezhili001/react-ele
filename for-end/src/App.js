import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { setCity2 } from '@/store/actions';
import userData from './user.json';
import Home from './views/Home';
import detailCity from './views/detailCity';
import DetailLoginInfo from './views/DetailLoginInfo';
import UpdateUsername from './views/UpdateUsername';
import ShopDetail from './views/ShopDetail/ShopDetail';
import store from './store';
import City from './views/City';
import Rules from './views/Rules/index';
import login from './views/Login/index';

class App extends React.Component {

  componentWillMount() {
    store.dispatch(setCity2());
    let userinfo = JSON.stringify(userData);
    localStorage.setItem("userInfo", userinfo);
    localStorage.setItem("username", '');
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/detailCity" component={detailCity}></Route>
          <Route path="/shopdetail/order/:shopId" component={ShopDetail}></Route>
          <Route path="/detailLoginInfo" component={DetailLoginInfo}></Route>
          <Route path="/updateUsername" component={UpdateUsername}></Route>
          <Route path="/login" component={login}></Route>
          <Route path="/rules" component={Rules}></Route>
          <Route path="/city" component={City}></Route>
          <Route path='/shopdetail' component={ShopDetail}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
