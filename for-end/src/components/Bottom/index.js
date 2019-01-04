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
            <span>￥15</span>
            <div className="zi">领需配送费</div>
            </div>
        </div>
        <div className="r">去结算</div>
      </div>
    )
  }
}

