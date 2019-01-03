import React from 'react';
import { Link } from 'react-router-dom';
import {Carousel } from 'antd-mobile';
import axios from 'axios';

import './index.scss'
/*
  1. // 组件中要使用 仓库的数据，就得先做引入,
  2. 在构造函数中，调用 store.getState() 方法， 能返回仓库的 state (数据)
*/
import store from '@/store';

class HomePage extends React.Component {

  constructor(props){
    super(props);
    this.state={
      myCity: store.getState().city.curCity,
      banner:[
        {
          'discribe':'麻辣烫',
          'imgUrl':"https://fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          'discribe':'素食简餐',
          "imgUrl":'https://fuss10.elemecdn.com/0/1a/314b6da88ab6c7ae9828f91652d40jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'
        },
        {
          'discribe':'地方小吃',
          "imgUrl":"https://fuss10.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"

        },
        {
          'discribe':'大牌惠吃',
          "imgUrl":"https://fuss10.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          'discribe':'米粉面管',
          "imgUrl":"https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          'discribe':'包子粥店',
          "imgUrl":"https://fuss10.elemecdn.com/5/1a/dc885d2ce022d2ee60495acafb795jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          'discribe':'炸鸡炸串',
          "imgUrl":"https://fuss10.elemecdn.com/a/78/0fb469b2da210827ec16896e00420jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"

        },
        {
          'discribe':'汉堡披萨',
          "imgUrl":"https://fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          'discribe':'鸭脖卤味',
          "imgUrl":"https://fuss10.elemecdn.com/b/70/9fd298fa84d49748984e082777e90jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        }


      ],
      banners:[
        {
          'discribe':'美食',
          'imgUrl':"https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          'discribe':'下午茶',
          'imgUrl':"https://fuss10.elemecdn.com/7/a9/77ff360f7d3fde2d459727ad09fcfjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          'discribe':'商场便利',
          'imgUrl':"https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          'discribe':'水果',
          'imgUrl':"https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          'discribe':'医药健康',
          'imgUrl':"https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          'discribe':'鲜花绿植',
          'imgUrl':"https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          'discribe':'厨房生鲜',
          'imgUrl':"https://fuss10.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          'discribe':'甜品饮品',
          'imgUrl':"https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          'discribe':'签到领红包',
          'imgUrl':"https://fuss10.elemecdn.com/5/de/bebe83947afee0b0f38257b0e3866jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          'discribe':'地方菜系',
          'imgUrl':"https://fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        }
      ],
      list:[     

      ]
    }
    store.subscribe(() => {
      console.log('仓库发生了变化');
      console.log(store.getState());
      this.setState({
        myCity: store.getState().city.curCity
      })
    })
  }
  getList(){
    axios.get("/api/homePageGood/list").then((res)=>{
     
      console.log("进来了");
     var data=res.data.data.list;
      console.log(res.data.data.list);
      this.setState({
        list:data
      })

    })
  }
componentWillMount(){
  
  this.getList();
}



  render() {
    let zlCity = this.state.myCity || '北京市'
    return (
      <div className="hungry">
      <div className="header">
      <Link to="/detailCity" className="arial">{zlCity+' ∨'}</Link>

      </div>
      <div className="foot-t">
        <Link to="/food" className="food"><span className="iconfont icon-sousuo ">搜索饿了么商家、商品名称</span></Link>
      </div>
    <Carousel dots={false}>
    <ul className="banner">
     {
       this.state.banner.map((item,index)=>(
        <li key={index}>
        <Link to="/detail" className="detail">
    {/* eslint-disable-next-line */}
           <img src={item.imgUrl} key={index} />
           <span >{item.discribe}</span>
         </Link>
        </li>
       ))
     }
      </ul>
      <ul className="banner">
     {
       this.state.banners.map((item,index)=>(
        <li key={index}>
        <Link to="/detail" className="detail">
    {/* eslint-disable-next-line */}
           <img src={item.imgUrl} key={index} />
           <span >{item.discribe}</span>
         </Link>
        </li>
       ))
     }
      </ul>

    </Carousel>
    <div className="special">
    {/* eslint-disable-next-line */}
     <p> <img src="https://fuss10.elemecdn.com/8/0e/4dd212d831becab6e3ebd484c0941jpeg.jpeg?imageMogr/format/webp/thumbnail/34x/" /><span className='h2'>超级会员·</span>每月领20元红包</p>
     <Link to="#" className="on">立即开通<i className="iconfont icon-iconfonti"></i></Link>
    </div>
    <div className="rub">
      <Link to="#" className="same">
      <h3>品质套餐</h3>
      <p>搭配齐全吃的好</p>
      <span className="d1">立即抢购<i  className="iconfont icon-iconfonti"></i></span>
    {/* eslint-disable-next-line */}
      <img src="https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/"></img>
      </Link>
      <Link to="#" className="same">
      <h3 className="red">限量抢购</h3>
      <p>超值美味9.9元起</p>
      <span><em>187人</em>正在抢<i  className="iconfont icon-iconfonti"></i></span>
    {/* eslint-disable-next-line */}
      <img src="https://fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/"></img>
      </Link>
    </div>
      <Carousel   infinite={true} autoplay={true}>
    {/* eslint-disable-next-line */}
        <img src="https://fuss10.elemecdn.com/d/f5/456ea6285819f7932d8606bffeb35jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"/>
    {/* eslint-disable-next-line */}
        <img src=" https://fuss10.elemecdn.com/7/90/8012dcb83434050f0363316f24809jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"/>

      </Carousel>
      <div className="tuijian">
      <p>——  推荐商家  ——</p>
      </div>
      <div className="paixu">
     <p>综合排序</p>
     <p>距离最近</p>
     <p>品质联盟</p>
     <p>筛选</p>

      </div>
      <ul className="list">
     {
       this.state.list.map((item,index)=>(
        <li key={index}>
        <Link to="/detail" className="detail">

    {/* eslint-disable-next-line */}
           <img src={item.imgUrl} key={index} />

          <div className="right">
            <i>品牌</i><span>{item.name}</span>
    {/* eslint-disable-next-line */}
            <p><img src={item.star}/> <span>{item.pingjia}</span>月售{item.number}单</p>
           <div className="line"> <p>￥{item.qisong}起送 | 配送费 ￥{item.peisong}</p><span>{item.juli} | {item.minite}分钟</span></div>
          </div>
         </Link>
        </li>
       ))
     }
      </ul>

      </div>
    )
  }
}

export default HomePage;