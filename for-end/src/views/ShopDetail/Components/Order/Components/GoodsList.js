import React, { Component } from 'react';
import './GoodsList.scss';

export default class GoodsList extends Component {
  constructor(props){
    super(props);
    this.state = {
      curTab: 'cur-type-1',
      tabs: [
        {id:"cur-type-1", name: '优惠'},
        {id:"cur-type-2", name: '主食'},
        {id:"cur-type-3", name: '超值套餐'},
        {id:"cur-type-4", name: '小食'},
        {id:"cur-type-5", name: '饮品'},
        {id:"cur-type-6", name: '甜品'},
        {id:"cur-type-7", name: '开心乐园餐'}
      ]
    }
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
         this.state.tabs.map( (item, index) => {
           return (
            <li
              key={item.id}
              className={item.id === this.state.curTab ? 'cur-goods-type' : ''}
              onClick={this.tabChange.bind(this, item.id)}
            >
            <span><a href={`#/shopdetail/order/${index + 1}`}>{item.name}</a></span>
            </li>
           )
         })
       }
        {/* <li className='cur-goods-type'><span><a href='#/shopdetail/order/1'>优惠</a></span></li>
        <li><span><a href='#/shopdetail/order/2'>主食</a></span></li>
        <li><span><a href='#/shopdetail/order/3'>超值套餐</a></span></li>
        <li><span><a href='#/shopdetail/order/4'>小食</a></span></li>
        <li><span><a href='#/shopdetail/order/5'>饮品</a></span></li>
        <li><span><a href='#/shopdetail/order/6'>甜品</a></span></li>
        <li><span><a href='#/shopdetail/order/7'>开心乐园餐</a></span></li> */}
      </ul>
      <div className='goods-detail'>
        <dl>
          <dt id='/shopdetail/order/1'>优惠</dt>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/1/db/dfc36339f32367d1f5673fdefb075png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>海陆空三味大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/6/c3/c038418ced85d34344e5499a6ba79png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>川辣双鸡堡大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/a/e6/76b819c6d684c787facc792a588afpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>那么大鸡排大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/d/42/b51f842e7e75b0ff610964ddc4bb2png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>不素之霸三味大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/2/8c/f48d207e6b18dc7b21012d5e6a3fajpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>超级难吃大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dt id='/shopdetail/order/2'>主食</dt>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/9/d7/8ba6879986de20efb6631067ab863png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>川辣双鸡堡1份</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/d/9a/fa410606fc30b1df41de60980e2d5png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>川辣双鸡堡大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/b/5c/35302a134bc3dcae8b458d636819ejpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>那么大鸡排大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/8/83/101564e7e3197c713053ee2b81531jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>不素之霸三味大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/2/8c/f48d207e6b18dc7b21012d5e6a3fajpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>超级难吃大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>

          <dt id='/shopdetail/order/3'>超值套餐</dt>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/9/d7/8ba6879986de20efb6631067ab863png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>双层深海狭鳕鱼堡1份</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/6/c3/c038418ced85d34344e5499a6ba79png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>川辣双鸡堡大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/d/9a/fa410606fc30b1df41de60980e2d5png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>不素之霸双层牛堡</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/d/42/b51f842e7e75b0ff610964ddc4bb2png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>不素之霸三味大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/2/8c/f48d207e6b18dc7b21012d5e6a3fajpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>超级难吃大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dt id='/shopdetail/order/4'>小食</dt>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/1/db/dfc36339f32367d1f5673fdefb075png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>那么大鲜柠特饮可乐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/6/c3/c038418ced85d34344e5499a6ba79png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>川辣双鸡堡大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/a/e6/76b819c6d684c787facc792a588afpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>那么大大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/d/42/b51f842e7e75b0ff610964ddc4bb2png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>不素之霸三味大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/2/8c/f48d207e6b18dc7b21012d5e6a3fajpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>超级难吃大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dt id='/shopdetail/order/5'>饮品</dt>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/1/5d/a864a97ac5b19127b9038df46eb4cpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>海陆空三味大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/d/6d/55be0b5ed8a9250126b3aa242ad03jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>川辣双鸡堡大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/a/e6/76b819c6d684c787facc792a588afpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>那么大鸡排大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/f/e5/98e97b9bc4e08d9dfec5c2c9180d3png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>不素之霸三味大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/2/8c/f48d207e6b18dc7b21012d5e6a3fajpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>超级难吃大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dt id='/shopdetail/order/6'>甜品</dt>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/1/db/dfc36339f32367d1f5673fdefb075png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>海陆空三味大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/6/c3/c038418ced85d34344e5499a6ba79png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>川辣双鸡堡大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/a/e6/76b819c6d684c787facc792a588afpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>那么大鸡排大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/d/42/b51f842e7e75b0ff610964ddc4bb2png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>不素之霸三味大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/2/8c/f48d207e6b18dc7b21012d5e6a3fajpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>超级难吃大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dt id='/shopdetail/order/7'>开心乐园套餐</dt>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/1/db/dfc36339f32367d1f5673fdefb075png.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>海陆空三味大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/c/3f/514cd8bb77c9d5d931012a2e3823djpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>川辣双鸡堡1份</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/a/e6/76b819c6d684c787facc792a588afpng.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>双层深海狭鳕鱼堡1份</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/c/3f/514cd8bb77c9d5d931012a2e3823djpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>不素之霸双层牛堡1份</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/2/8c/f48d207e6b18dc7b21012d5e6a3fajpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>麦乐鸡5块</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>




        </dl>
      </div>
    </div>
    )
  }
}
