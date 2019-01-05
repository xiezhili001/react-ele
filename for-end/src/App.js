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
import HomeCard from './views/HomeCard/index';

class App extends React.Component {

  componentWillMount() {
    store.dispatch(setCity2());
    let userinfo = JSON.stringify(userData);
    localStorage.setItem("userInfo", userinfo);
    if (localStorage.getItem("username") == null) {
      localStorage.setItem("username", '');
    }
    // localStorage.setItem("username", '');
    // console.log(localStorage.getItem("username") == null);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/detailCity" component={detailCity}></Route>
          <Route path="/detailLoginInfo" component={DetailLoginInfo}></Route>
          <Route path="/updateUsername" component={UpdateUsername}></Route>
          <Route path="/shopdetail/order" component={ShopDetail}></Route>
          <Route path="/login" component={login}></Route>
          <Route path="/rules" component={Rules}></Route>
          <Route path="/city" component={City}></Route>
          <Route path='/shopdetail' component={ShopDetail}></Route>
          <Route path='/homeCard' component={HomeCard}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
