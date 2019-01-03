import React, { Component } from 'react';
import './GoodsList.scss';
import data from './elemGoods.json';

export default class GoodsList extends Component {
  constructor(props){
    super(props);
    this.state = {
      curTab: 0,
      elemGoods: []
    }
  }
  componentWillMount() {
    let shopId = localStorage.getItem("shopId");
    let dataList = [];
    data.map((item) => {
      if (item.sid === shopId) {
        dataList[0] = item;
      }
      return dataList[0];
    })
    let products = dataList[0].products;
    this.setState({
      elemGoods: products,
    },function () {
      console.log(this.state.elemGoods)
      })
  }
  tabChange (id) {
    this.setState({
      curTab: id
    });
  }
  render() {
    return (
    <div className='goods-list'>
      <ul className='goods-type'>
       {
         this.state.elemGoods.map( (item, index) => {
           return (
            <li
              key={index}
              className={index === this.state.curTab ? 'cur-goods-type' : ''}
              onClick={this.tabChange.bind(this, index)}
            >
            <span><a href={`#/shopdetail/order/${index + 1}`}>{item.category}</a></span>
            </li>
           )
         })
       }
      </ul>

      <div className='goods-detail'>
        <dl>
          {this.state.elemGoods.map((item, index) => {
            return (
              <React.Fragment key={index+30}>
              <dt id={`/shopdetail/order/${index+1}`} key='index'>{item.category}</dt>
                { item.products.map((i, j) => {
                  return (
                  <dd key={j + 1000}>
                    <div className='goods-pic'><img src={i.images} alt='elem'/></div>
                    <div className='goods-det'><h2>{i.name}</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售{i.month_sales_count}份</span>
                    <div className='h3'>
                      <div><span>￥{i.price}</span></div>
                      <div className='inandre'>
                      <i className='iconfont icon-jian1'></i>
                        <span>0</span>
                        <i className='iconfont icon-jia'></i>
                      </div>
                    </div>
                    </div>
                  </dd>
                  )
                })}
              </React.Fragment>
            )
          })}
        </dl>
      </div>
    </div>
    )
  }
}
