import React, { Component } from 'react';
import axios from 'axios';
import json from './storeName.json'

import './index.scss';

export default class Search extends Component {
constructor(props){
  super(props);
  this.state={
    list:[]
  }
}

search(){
  this.refs['hot'].style.display="none";
  var arr = json;
  

  var myVal=this.refs['search'].value;
   var newArr=arr.filter(item=>{
     return item.name.indexOf(myVal)>-1;
   })
   this.setState({
    list : newArr
  })

 
 
}
back(){
  
  this.props.history.push('/HomePage');
}
  render() {
    return (
      <div className="search">
      <div className="header">
      <span className="iconfont icon-zuojiantou" onClick={this.back.bind(this)}></span>
      <input ref="search" i="search" type="search" placeholder="输入商家、商品名称" onChange={this.search.bind(this)}/>
      <p>搜索</p>
      </div>
      <ul>
    {
      this.state.list.map((item,index)=>(
        <li className="s-li" key={index}>
        <img src={item.logo} alt="好吃" key={index}/>
          
        <div>
        <span>
       
     {item.name}<b>减</b>
       </span>
          
         
         <span className="s-fen">{`评价4.7`}</span>
        </div>
          
        </li>

      ))
    }
      </ul>

<div className="s-hot" ref="hot">
<p>热门搜索</p>
<div className="section">
<span>
牛肉面
</span>
<span>
  麻辣烫
</span>
<span>小碗子</span>
<span>生煎</span>
</div>
</div>

      </div>
    )
  }
}
