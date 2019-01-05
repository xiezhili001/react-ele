import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './Common.scss';
import data from '../Order/Components/elemGoods.json';

export default class Common extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopData: {}
    }
    this.maskSitch = this.maskSitch.bind(this);
    this.closeMask = this.closeMask.bind(this);
    this.maskBottom = this.maskBottom.bind(this);
  }
  maskSitch() {
    this.refs['closeMask'].style.display = 'block';
  }
  maskBottom() {
    this.refs['bottomMask'].style.display = 'block';
  }
  closeMask() {
    this.refs['closeMask'].style.display = 'none';
    this.refs['bottomMask'].style.display = 'none';
  }

  //获取数据
  componentDidMount() {
    let shopId = localStorage.getItem("shopId");
    let Data = {};
    data.map(item => {
      if (shopId === item.sid) {
        Data = item;
      }
      return Data;
    })
    this.setState({
      shopData: Data
    })
  }
  render() {
    return (
      <>
        {/* 顶部背景与返回首页按钮 */}
        <div className='topbg'>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img src="https://fuss10.elemecdn.com/d/61/135a91686f2d4c2baa5a883e2459ajpeg.jpeg?imageMogr/format/webp/thumbnail/750x/thumbnail/!40p/blur/50x40/" />
          <NavLink to="/" className='iconfont icon-zuojiantou-'></NavLink>
        </div>

        {/* 店铺详情描述 */}
        <div className='detail-des'>
          {/* 店铺Logo */}
          <div className='detail-logo'>
            <img src={this.state.shopData.logo} alt='elem' />
            <span>品牌</span>
          </div>

          {/* 店铺名称 销售情况/中间弹出层*/}
          <div className='detail-shop' onClick={this.maskSitch}>
            <h2>
              <span>{this.state.shopData.name}</span><i className='iconfont icon-sanjiaoright'></i>
            </h2>
            <p>
              评价{this.state.shopData.score}&nbsp;&nbsp;&nbsp;月售{this.state.shopData.month_sales_count}单 &nbsp;&nbsp;&nbsp;商家配送约28分钟
            </p>
          </div>

          {/* 单品特价/优惠活动/底部弹出层 */}
          <div className='special-sprice' onClick={this.maskBottom}>
            <div> <span className='sprice-icon'>特价</span><span className='sprice-single'>单品定价</span> </div> <div> <span className='sprice-discount'>12个优惠<i className='iconfont icon-sanjiaodown'></i></span> </div>
            <p className='shop-notice'>公告：新品元气满分双人早餐和全家满分早餐，给你早餐元气满分，快乐满分！</p>
          </div>
        </div>

        {/* tab-bar选项卡 */}
        <div className='tab-bar'>
          <div className='tab-bar-1'>
            <NavLink to='/shopdetail/order' activeClassName='cur-tab-bar'><h2 className='cur-h2'>点餐<span className='tab-bar-cur'></span></h2></NavLink>
          </div>
          <div className='tab-bar-2'>
            <NavLink to='/shopdetail/evaluate' activeClassName='cur-tab-bar'><h2 className='cur-h2'>评价<span className='tab-bar-cur'></span></h2></NavLink>
          </div>
          <div className='tab-bar-3'>
            <NavLink to='/shopdetail/seller' activeClassName='cur-tab-bar'><h2 className='cur-h2'>商家<span className='tab-bar-cur'></span></h2></NavLink>
          </div>
        </div>

        {/* 中间弹出层 */}
        <div className='mask-info' ref='closeMask' onClick={this.closeMask}>
          <CSSTransition
            timeout={500}
            classNames='r'
            className='animated fadeInUp r-enter-active popup'
            onClick={(e) => { e.stopPropagation() }}
          >
            <div>
              <h2><span className='sprice-icon'>品牌</span>{this.state.shopData.name}</h2>
              <ul className='delivery'>
                <li className='first-grade'>{this.state.shopData.score}<span>评分</span></li>
                <li>{this.state.shopData.month_sales_count}单<span>月售</span></li>
                <li>商家配送<span>约28分钟</span></li>
                <li>{this.state.shopData.delivery_start_price}元<span>匹配送</span></li>
                <li>1.7km<span>距离</span></li>
              </ul>
              <h3>——公告——</h3>
              <p>新品元气满分双人早餐和全家满分早餐，给你早餐元气满分，快乐满分！</p>
              <span className='close-mask' onClick={this.closeMask}>X</span>
            </div>
          </CSSTransition>
        </div>

        {/* 底部弹出层 */}
        <div className='mask-bottom' ref='bottomMask' onClick={this.closeMask}>
          <CSSTransition
            timeout={500}
            classNames='r'
            className='animated fadeInUp r-enter-active popup'
          >
            <div className='popup' onClick={(e) => { e.stopPropagation() }}>
              <h2>优惠活动</h2>
              <span className='close-mask' onClick={this.closeMask}><i className='iconfont icon-guanbi'></i></span>
              <ul className='yhhd'>
                <li><span>特价</span>单品定价</li>
                <li><span className='first-dan'>首单</span>新用户下单立减17元(不与其它活动同享)</li>
                <li><span>特价</span>单品定价</li>
                <li><span>特价</span>单品定价</li>
                <li><span className='free-song'>免费</span>免费送新品</li>
                <li><span>特价</span>单品定价</li>
                <li><span>特价</span>单品定价</li>
                <li><span>特价</span>单品定价</li>
                <li><span>特价</span>单品定价</li>
              </ul>
            </div>
          </CSSTransition>
        </div>
      </>
    )
  }
}
