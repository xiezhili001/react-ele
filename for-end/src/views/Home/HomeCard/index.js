import React from 'react';
import './index.scss';

const BeforeOrder = function () {
  return <>
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
    </div>
  </>
}
const AfterOrder = function () {
  return <>
    <div className="gao-order">
    <section data-v-1ec2d114="" className="nodatatipWrap NoDataTip-wrapper_1Gwf0tm" >
    {/* eslint-disable-next-line */}
      <img src="//fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png"/>
      <h3>登录后查看外卖订单</h3>
      <button onClick={()=>{window.location.href='#/login';}}>
      立即登录
      </button>
    </section>
    </div>
  </>
}

class HomeCard extends React.Component {


  render() {

    if (localStorage.getItem("username") === "") {
      return (
        <AfterOrder></AfterOrder>
      )
    }else{
      return (
        <BeforeOrder></BeforeOrder>
      )
    }

  }
}

export default HomeCard;
