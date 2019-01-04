import React, { Component } from 'react';
import './GoodsList.scss';

export default class GoodsList extends Component {
  render() {
    return (
    <div className='goods-list'>
      <ul className='goods-type'>
        <li className='cur-goods-type'>优惠</li>
        <li><span>主食</span></li>
        <li><span>超值套餐</span></li>
        <li><span>小食</span></li>
        <li><span>饮品</span></li>
        <li><span>甜品</span></li>
        <li><span>开心乐园餐</span></li>
      </ul>
      <div className='goods-detail'>
        <dl>
          <dt>优惠</dt>
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
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/2/8c/f48d207e6b18dc7b21012d5e6a3fajpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>超级难吃大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
          <dd>
            <div className='goods-pic'><img src='//fuss10.elemecdn.com/2/8c/f48d207e6b18dc7b21012d5e6a3fajpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt='elem'/></div>
            <div className='goods-det'><h2>超级难吃大餐</h2><p>不素之霸双层牛堡1份 双层深海狭鳕鱼堡1份 川辣双鸡堡1份 那么大鸡排1块 麦乐鸡5块 那么大鲜柠特饮可乐 3*660ml</p><span>月售13份</span><h3><span>￥89</span><i className='iconfont icon-jia'></i></h3></div>
          </dd>
        </dl>
      </div>
    </div>
    )
  }
}
