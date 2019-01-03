import React, { Component } from 'react';
// import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import './index.scss';

export default class Bottom  extends Component {
  render() {
    return (
      <div className="b">
        <div className="l">
          <p> </p>
            <div className="y">
            <span>￥0</span>
            <div className="zi">另需配送费￥5</div>
            </div>
        </div>
        <a href='#/card'><div className="r">去结算</div></a>
      </div>
    )
  }
}

