import React, { Component } from 'react';
import './GoodsList.scss';
import data from './elemGoods.json';
import { Link } from 'react-router-dom';


export default class GoodsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTab: 0,
      elemGoods: [],
      cartList: localStorage.getItem('cartList') ? JSON.parse(localStorage.getItem('cartList')) : [],
    }
  }
  //获取数据
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
    products.map(item => {
      return item.products.map(i => {
        return i.num = 1;
      })
    })
    this.setState({
      elemGoods: products,
    })

  }
  tabChange(id) {
    this.setState({
      curTab: id
    });
  }

  // 判断食品数量
  goodNum(id) {
    let cartGood = this.state.cartList.find(item => {
      return item.pid === id;
    })
    return cartGood ? cartGood.num : 0;
  }

  // 食品总额
  payMoney() {
    let tatolMoney = 0;
    this.state.cartList.forEach(element => {
      let price = element.price.split("元")[0];
      return tatolMoney += parseInt(price) * element.num;
    });
    return tatolMoney ? tatolMoney : 0;
  }
  componentDidUpdate() {
    this.payMoney();
  }

  // 加入购物车
  addCart(food) {
    var flag = false; //默认存在
    var index = 0; //获取下标
    for (var i = 0; i < this.state.cartList.length; i++) {
      if (this.state.cartList[i].pid === food.pid) {
        flag = true;
        index = i;
        break;
      } else {
        flag = false;
      }
    }
    if (flag) {
      let num = this.state.cartList[index].num + 1;
      let cartList = this.state.cartList;
      let updateData = Object.assign({}, cartList[index], { num: num });
      for (var j = 0; j < cartList.length; j++) {
        if (cartList[j].pid === food.pid) {
          cartList.splice(j, 1, updateData);
          break;
        }
      }
      // console.log(cartList);
      // console.log(updateData);
      this.setState({
        cartList: cartList
      }, function () {
        localStorage.setItem('cartList', JSON.stringify(this.state.cartList));
      })
    } else {
      // 不存在
      let data2 = this.state.cartList;
      data2.push(food);
      this.setState({
        cartList: data2
      }, function () {
        localStorage.setItem('cartList', JSON.stringify(this.state.cartList));
      })
    }
  }

  // 从购物减去
  redCart(food) {
    var flag = false; //默认存在
    var index = 0; //获取下标
    for (var i = 0; i < this.state.cartList.length; i++) {
      if (this.state.cartList[i].pid === food.pid) {
        flag = true;
        index = i;
        break;
      } else {
        flag = false;
      }
    }
    if (flag) {
      // 存在
      if (this.state.cartList[index].num === 1) {
        let cartList = this.state.cartList;
        for (var k = 0; k < cartList.length; k++) {
          if (cartList[k].pid === food.pid) {
            cartList.splice(k, 1);
            break;
          }
        }
        this.setState({
          cartList: cartList
        }, function () {
          localStorage.setItem('cartList', JSON.stringify(this.state.cartList));
        })
        return false;
      }
      let num = this.state.cartList[index].num - 1;
      let cartList = this.state.cartList;
      let updateData = Object.assign({}, cartList[index], { num: num });
      for (var j = 0; j < cartList.length; j++) {
        if (cartList[j].pid === food.pid) {
          cartList.splice(j, 1, updateData);
          break;
        }
      }
      this.setState({
        cartList: cartList
      }, function () {
        localStorage.setItem('cartList', JSON.stringify(this.state.cartList));
      })
    } else {
      return false;
    }
  }
  render() {
    return (
      <div className='goods-list'>
        <ul className='goods-type'>
          {
            this.state.elemGoods.map((item, index) => {
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
                <React.Fragment key={index + 30}>
                  <dt id={`/shopdetail/order/${index + 1}`} key='index'>{item.category}</dt>
                  {item.products.map((i, j) => {
                    return (
                      <dd key={j + 1000}>
                        <div className='goods-pic'><img src={i.images} alt='elem' /></div>
                        <div className='goods-det'><h2>{i.name}</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售{i.month_sales_count}份</span>
                          <div className='h3'>
                            <div><span>￥{i.price}</span></div>
                            <div className='inandre'>
                              <i className='iconfont icon-jian1' onClick={this.redCart.bind(this, i)}></i>
                              <span>{this.goodNum(i.pid)}</span>
                              <i className='iconfont icon-jia' onClick={this.addCart.bind(this, i)}></i>
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
        {/* 底部购物车 */}
        <div className="b">
          <div className="l">
            <p> </p>
            <div className="y">
              <span>￥{this.payMoney()}</span>
              <div className="zi">另需配送费￥5</div>
            </div>
          </div>
          <Link to="/submit"><div className="r">去结算</div></Link>
        </div>
      </div>
    )
  }
}
