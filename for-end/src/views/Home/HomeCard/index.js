import React from 'react';
import './index.scss';
import Submit from "./Submit/index"

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
        <Submit></Submit>
      )
    }

  }
}

export default HomeCard;
