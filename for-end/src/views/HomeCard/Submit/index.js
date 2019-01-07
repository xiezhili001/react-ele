import React, { Component } from 'react';
import './index.scss';
export default class order extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: "",
      animating: false,
      timeArr: [1200000, 2400000, 3600000, 4800000, 6000000],
      dealTimeArr: [],
      carArr: []
      // allPrice: ""
    }
  }
  getDB(num) {
    return num < 10 ? "0" + num : num;
  }
  dateToString() {
    var date = new Date().getTime();
    var dateStr = "";
    let date1 = date + 600000;
    let date2 = new Date(date1);
    let h = date2.getHours();
    let M = date2.getMinutes();
    // dateStr += y+"年"+getDB(m)+"月"+getDB(d)+"日"
    dateStr += " " + this.getDB(h) + ":" + this.getDB(M);
    return dateStr;
  }
  //送达时间
  addMinites() {
    let dateStr = new Date().getTime();
    let time = [];
    this.state.timeArr.map(item => {
      let date1 = dateStr + item;
      let date2 = new Date(date1);
      let h = date2.getHours();
      let M = date2.getMinutes();
      let timeStr = "" + this.getDB(h) + ":" + this.getDB(M);
      time.push(timeStr);
      return timeStr;
    })
    this.setState({
      dealTimeArr: time
    })
  }
  choose() {
    this.refs['choose'].style.display = "block"
  }
  chooseTime(res) {
    // console.log(res);
    this.setState({
      time: res
    })
    this.refs['choose'].style.display = "none";
    // console.log(res);
  }
  close() {
    this.refs['choose'].style.display = "none";
  }
  // 得到数据
  getData() {
    this.setState({
      carArr: localStorage.getItem("cartList")
    })
  }
  // getAllPrice() {
  //   console.log(this.state.carArr);

  //   let price = 0
  //   this.state.carArr.map(item => {
  //     price += item.num*(parseInt(item.price))
  //     return item
  //   })
  //   this.setState({
  //     allPrice: price
  //   })
  // }
  componentWillMount() {
    this.addMinites();
    this.setState({
      time: this.dateToString()
    })
    this.getData()
    // this.getAllPrice()

  }
  goBack() {
    this.props.history.push('/shopdetail/order')
  }

  render() {
    var dataArr = JSON.parse(this.state.carArr)
    let price = 0
    dataArr.map(item => {
      price += item.num*(parseInt(item.price))
      return item
    })
    return (
      <div className="order">
        <div className="header">
          <div className="iconfont icon-zuojiantou aror" onClick={this.goBack.bind(this)}></div>
          <div className="sure">确认订单</div>
        </div>
        <div className="s1">
          <div className="s1-1">
            <p>订单配送至家</p>
            <div className="place">金铂寓<i className=" iconfont icon-youjiantou "></i></div>
            <div className="xin">帅哥 400100300</div>
          </div>
          <ul className="song">
            <li>
              <div>送到时间</div>
              <p onClick={this.choose.bind(this)}>尽快送达({this.state.time}送达)<i className=" iconfont icon-youjiantou j"></i></p>
            </li>
            <li>
              <div>支付方式</div>
              <p>在线支付</p>
            </li>
          </ul>
          {
            dataArr.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <p className="p1">湘赣情木桶饭</p>
                  <ul className="form">
                    <li>
                      <div>
                        <p>
                          {/* eslint-disable-next-line */}
                          <img src={item.images} />
                        </p>
                        <p className="pname">{item.name}</p>
                      </div>
                      <div>x {item.num}</div>
                      <div>￥{parseInt(item.price)}</div>
                    </li>
                    <li>
                      <div><p className="package">包装</p>
                        <p>餐盒</p>
                      </div>
                      <div>￥1</div>
                    </li>
                    <li>
                      <div>
                        <p className="buin">商家</p>
                        <p className="mon">配送费</p>
                      </div>
                      <div>￥1</div>
                    </li>
                  </ul>
                </div>

              )
            })
          }
        </div>
        <div className="b">
          <div className="l">￥{price}</div>
          <div className="r">去支付</div>
        </div>

        <div className="choose" ref="choose" onClick={this.close.bind(this)}>
          <div className="top"></div>
          <div className="low">
            <div className="tag">选择送达时间</div>
            <div className="con">
              <div className="con-l">
                <p>今日（周五）</p>
              </div>
              <div className="con-r" >
                <div>尽快送达<em>(1元配送费)</em></div>
                {
                  this.state.dealTimeArr.map((item, index) => {
                    return (
                      <div key={index} onClick={this.chooseTime.bind(this, item)}><b>{item}</b> <em>(1元配送费)</em></div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
