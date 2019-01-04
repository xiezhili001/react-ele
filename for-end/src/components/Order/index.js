import React, { Component } from 'react';
import './index.scss';


export default class order extends Component {

constructor(props){
  super(props);
  this.state={
    time:"",
    animating: false,
  }
}

 getDB(num){
	return num < 10 ? "0" + num : num;
}
dateToString(date){
	
	
	var dateStr = "";
	

	var h = date.getHours();
	var M = date.getMinutes()+10;
	var s = date.getSeconds();
	
	// dateStr += y+"年"+getDB(m)+"月"+getDB(d)+"日" 
	dateStr += " " + this.getDB(h) + ":" + this.getDB(M) ;
	// dateStr += " " + week[w];
	return dateStr;
}
choose(){
  this.refs['choose'].style.display="block"

}
chooseTime(res){

  // console.log(res);
  this.setState({
    time:res
    })
  this.refs['choose'].style.display="none";
  
  // console.log(res);

}
close(){
  this.refs['choose'].style.display="none";

}

  

componentWillMount(){
var date=new Date();
this.setState({
time:this.dateToString(date)
})


}




  render() {
    return (
      <div className="order">
      <div className="header">
      <div className="iconfont icon-zuojiantou aror"></div>
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
        <div className="item">
          <p >湘赣情木桶饭</p>
          <ul className="form">
            <li>
              <div><p>
              <img src="https://fuss10.elemecdn.com/7/2c/9cd94a63feda4dfbede17a0958218jpeg.jpeg?imageMogr/format/webp/thumbnail/!72x72r/gravity/Center/crop/72x72/"/>
              </p>
              <p><em>油豆腐炒肉饭</em><br/>
              <i className="xiao">不辣</i>
              </p>



              </div>
              <div>x 1</div>
              <div>￥14</div>
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
      </div>
      <div className="b">
      <div className="l">￥16</div>
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
      <div>尽快送达 | 14:51 <em>(1元配送费)</em></div>
      <div onClick={this.chooseTime.bind(this,"15:00")}><b>15:00</b> <em>(1元配送费)</em></div>
      <div onClick={this.chooseTime.bind(this,"15:15")}><b>15:15</b> <em>(1元配送费)</em></div>
      <div onClick={this.chooseTime.bind(this,"15:30")}><b>15:30</b> <em>(1元配送费)</em></div>
      <div onClick={this.chooseTime.bind(this,"15:45")}><b>15:45</b> <em>(1元配送费)</em></div>
      <div onClick={this.chooseTime.bind(this,"15:60")}><b>15:60</b> <em>(1元配送费)</em></div>
      <div onClick={this.chooseTime.bind(this,"16:05")}><b>16:05</b> <em>(1元配送费)</em></div>
      <div onClick={this.chooseTime.bind(this,"16:20")}><b>16:20</b><em>(1元配送费)</em></div>
     
      </div>

      </div>

      </div>
      </div>
      </div>
    )
  }
}
