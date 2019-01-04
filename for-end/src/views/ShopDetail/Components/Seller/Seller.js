import React, { Component } from 'react'

import './Seller.scss';
export default class Seller extends Component {
  render() {
    return (
      <div className='seller'>
        <div className='delivery-info'>
          <h2>配送信息</h2>
          <p>由商家配送提供配送，约28分钟送达，距离1.7km</p>
          <p>配送费 <i className='iconfont icon-renminbi'></i> 9 </p>
        </div>
        <p className='bgbg'></p>

        <div className='delivery-info active-server'>
          <h2>活动与服务</h2>
          <p> <span className='tejia'>特价</span> 单品定价</p>
          <p> <span className='tejia'>特价</span> 单品定价</p>
          <p> <span className='tejia'>特价</span> 单品定价</p>
          <p> <span className='tejia'>特价</span> 单品定价</p>
          <p> <span className='shoudan'>首单</span> 新用户下单立减17元(不与其它活动同享)</p>
          <p> <span className='tejia'>特价</span> 单品定价</p>
          <p> <span className='tejia'>特价</span> 单品定价</p>
          <p> <span className='tejia'>特价</span> 单品定价</p>
          <p> <span className='tejia'>特价</span> 单品定价</p>
        </div>
        <p className='bgbg'></p>


        <div className='delivery-info seller-info'>
          <h2>商家信息</h2>
          <ul>
            <li>麦当劳</li>
            <li><span>品类</span><span className='xiangxi'>汉堡, 炸鸡炸串</span></li>
            <li><span>商家电话</span><span className='xiangxi'>4000517117</span></li>
            <li><span>地址</span><span className='xiangxi'>深圳市宝安区深圳市空港油料有限公司第二加油站（加气）配套用房</span></li>
            <li><span>营业时间</span><span className='xiangxi'>07:00-10:15,10:30-23:55</span></li>
          </ul>
        </div>
        <p className='bgbg'></p>

        <div className='delivery-info'>
          <h2>营业资质</h2>
        </div>
      </div>
    )
  }
}
