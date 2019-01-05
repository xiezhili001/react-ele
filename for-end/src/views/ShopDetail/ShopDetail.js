import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import './ShopDetail.scss';

import Common from './Components/Common/Common.js';
import Order from './Components/Order/Order.js';
import Evaluate from './Components/Evaluate/Evaluate.js';
import Seller from './Components/Seller/Seller.js';

export default class ShopDetail extends Component {
  // constructor (props) {
  //   super(props);
  // }
  render() {
    return (
      <HashRouter>
        <div id='shopdetail'>
          <Common></Common>
          <Switch>
            <Route path='/shopdetail/order' component={Order}></Route>
            <Route path='/shopdetail/evaluate' component={Evaluate}></Route>
            <Route path='/shopdetail/seller' component={Seller}></Route>
          </Switch>
        </div>
      </HashRouter>
    )
  }
}
