import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Tabbar from '@/components/Tabbar';

import HomeFilms from './HomeFilms';
import HomeDiscover from './HomeDiscover';
import HomeCenter from './HomeCenter';
import HomeCard from './HomeCard';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myTabs: [
        { key: 'films', href: "/films", icon: "icon-shouye", name: '首页' },
        { key: 'discover', href: "/discover", icon: "icon-faxian", name: '发现' },
        { key: 'card', href: "/card", icon: "icon-dingdan", name: '订单' },
        { key: 'center', href: "/center", icon: "icon-tubiao-", name: '我的' }
      ]
    }
  }

  render() {
    return (
      <div style={{"height": "100%","display": "flex","flexDirection": "column"}}>
        {/* 上面是可变的 */}
        <Switch>
          <Route path="/films" component={HomeFilms}></Route>
          <Route path="/discover" component={HomeDiscover}></Route>
          <Route path="/card" component={HomeCard}></Route>
          <Route path="/center" component={HomeCenter}></Route>
          <Redirect to="/films"></Redirect>
        </Switch>

        {/* 下面的固定的 tabbar */}
        <Tabbar tabs={this.state.myTabs}></Tabbar>
      </div>
    )
  }
}
