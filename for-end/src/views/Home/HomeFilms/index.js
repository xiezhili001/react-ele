import React from 'react';
import { Link } from 'react-router-dom';
import {Carousel } from 'antd-mobile';

import './index.scss'
/*
  1. // 组件中要使用 仓库的数据，就得先做引入,
  2. 在构造函数中，调用 store.getState() 方法， 能返回仓库的 state (数据)
*/
// import store from '@/store';

class HomeFilms extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     myCity: store.getState().city.curCity
  //   }

  //   store.subscribe(() => {
  //     console.log('仓库发生了变化');
  //     console.log(store.getState());
  //     this.setState({
  //       myCity: store.getState().city.curCity
  //     })
  //   })
  // }
  constructor(props){
    super(props);
    this.state={
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
       {
         "imgUrl":"https://fuss10.elemecdn.com/7/d3/48a777a6b444dc317cc24d101220cjpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/",
         "name":"肯得基宅急送(兴围店)",
         "star":"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=",
         "pingjia":4.7,
         "number":553,
         "qisong":0,
          "peisong":9

       },
       {
        "imgUrl":"https://fuss10.elemecdn.com/4/5c/c47b852dd9d7fa2960290f01f0a9bpng.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/",
        "name":"港岛机.叉烧饭",
        "star":"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=",
        "pingjia":4.6,
        "number":479,
        "qisong":20,
         "peisong":2

       }

      ]
    }
  }



  render() {
   
    return (
      <div className="hungry">
      <div className="header">
       <Link to="/change" className="arial"><div className=" iconfont icon-dizhitianchong-" >金箔寓</div></Link>
       
      </div>
      <div className="foot-t">
        <Link to="/food" className="food"><span className="iconfont icon-sousuo ">搜索饿了么商家、商品名称</span></Link>
      </div>
    <Carousel dots={false}>
    <ul className="banner">
     {
       this.state.banner.map(item=>(
        <li key={item.key}>
        <Link to="/detail" className="detail">
           <img src={item.imgUrl} key={item.key} />
           <span >{item.discribe}</span>
         </Link>
        </li>
       ))
     }
      </ul>
      <ul className="banner">
     {
       this.state.banners.map(item=>(
        <li key={item.key}>
        <Link to="/detail" className="detail">
           <img src={item.imgUrl} key={item.key} />
           <span >{item.discribe}</span>
         </Link>
        </li>
       ))
     }
      </ul>
      
    </Carousel>
    <div className="special">
   
     <p> <img src="https://fuss10.elemecdn.com/8/0e/4dd212d831becab6e3ebd484c0941jpeg.jpeg?imageMogr/format/webp/thumbnail/34x/" /><h2>超级会员·</h2>每月领20元红包</p>
     <Link to="#" className="on">立即开通<i className="iconfont icon-iconfonti"></i></Link>
    </div>
    <div className="rub"> 
      <Link to="#" className="same">
      <h3>品质套餐</h3>
      <p>搭配齐全吃的好</p>
      <span className="d1">立即抢购<i  className="iconfont icon-iconfonti"></i></span>
      <img src="https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/"></img>
      </Link>
      <Link to="#" className="same">
      <h3 className="red">限量抢购</h3>
      <p>超值美味9.9元起</p>
      <span><em>187人</em>正在抢<i  className="iconfont icon-iconfonti"></i></span>
      <img src="https://fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/"></img>
      </Link>
    </div>
      <Carousel   infinite={true} autoplay={true}>
        <img src="https://fuss10.elemecdn.com/d/f5/456ea6285819f7932d8606bffeb35jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"/>
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
       this.state.list.map(item=>(
        <li key={item.key}>
        <Link to="/detail" className="detail">

           <img src={item.imgUrl} key={item.key} />

          <div className="right">
            <i>品牌</i><span>{item.name}</span>
            <p><img src={item.star}/> <span>{item.pingjia}</span>月售{item.number}单</p>
            <p>￥{item.qisong}起送 | 配送费 {item.peisong}￥</p>
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

export default HomeFilms;
