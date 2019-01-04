import React from 'react';
import './index.scss'
// import Bottom from '@/components/Bottom';
class HomeCard extends React.Component {
  render() {
    return (
      <div className="gao-order">
      <div className="gao-order-main">
      <div className="gao-order-main-top">
      <a href="11">
      <div className="top-left">
      <div className="top">
      {/* eslint-disable-next-line */}
      <img src="https://fuss10.elemecdn.com/7/d3/48a777a6b444dc317cc24d101220cjpeg.jpeg?imageMogr/format/webp/thumbnail/!64x64r/gravity/Center/crop/64x64/"></img>
      </div>
      <div className="info">
      <p className="p1">肯德基宅急送</p>
      <p className="p2">10分钟前</p>
      </div>
      </div>
      <div className="top-right">
      <p>订单已取消</p>
      </div>
      </a>
      </div>
      <div className="gao-order-main-middle">
      <p className="p1">新奥尔良烤鸡腿汉堡ST</p>
      <p>￥28.50</p>
      </div>
      <div className="gao-order-main-bottom">
      <p>再来一单</p>
      </div>
      </div>

      {/* <Bottom></Bottom> */}
      </div>
    )
  }
}

export default HomeCard;
