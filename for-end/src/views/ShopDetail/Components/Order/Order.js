import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';
import GoodsList from './Components/GoodsList.js';
import './Order.scss';

export default class Order extends Component {
  constructor (props){
    super(props);
    this.state = {
      data: ['//fuss10.elemecdn.com/4/31/27fb8498c5beb0a18f5fe07e4b541png.png?imageMogr/format/webp/thumbnail/686x/','//fuss10.elemecdn.com/8/5d/5c17e8c37ae87fd9ad46d84d57eccpng.png?imageMogr/format/webp/thumbnail/686x/', '//fuss10.elemecdn.com/7/1b/eac126f486afd64f30ac6889c358cpng.png?imageMogr/format/webp/thumbnail/686x/', '//fuss10.elemecdn.com/4/f3/cdb5977b8a152cf3d8100147f8807png.png?imageMogr/format/webp/thumbnail/686x/']
    }
  }
  // componentDidMount() {
  // }
  render() {
    return (
      <div>
        <div className=''>
            {/* 单品宣传轮播图 */}
            <div className='publicityaa'>
              <Carousel
                autoplay={true}
                infinite
                dots={false}
              >
                {this.state.data.map(item => (
                  <img
                    key={item}
                    src={item}
                    alt="elem"
                    style={{ width: '100%', verticalAlign: 'top' }}
                  />
                ))}
              </Carousel>
            </div>

            {/* 商家推荐 ul横向滚动列表 */}
            <div className='recommend'>
              <h2>商家推荐</h2>
              <ul>
                <li>
                  <img alt="elem" src="//fuss10.elemecdn.com/1/5c/7b9cdd261290e3282037981a283c0png.png?imageMogr/format/webp/thumbnail/240x/" />
                  <p className='goods-title'>金拱门桶A组合</p>
                  <p className='goods-sales'>月售15 好评率100%</p>
                  <div>
                    <span><i className='iconfont icon-renminbi'></i>66.6</span>
                    <i className='iconfont icon-jia'></i>
                  </div>
                </li>
                <li>
                  <img alt="elem" src="//fuss10.elemecdn.com/a/e6/76b819c6d684c787facc792a588afpng.png?imageMogr/format/webp/thumbnail/240x/" />
                  <p className='goods-title'>无辣不欢组合</p>
                  <p className='goods-sales'>月售8 好评率89%</p>
                  <div>
                    <span><i className='iconfont icon-renminbi'></i>58.8</span>
                    <i className='iconfont icon-jia'></i>
                  </div>
                </li>
                <li>
                  <img alt="elem" src="//fuss10.elemecdn.com/2/8c/f48d207e6b18dc7b21012d5e6a3fajpeg.jpeg?imageMogr/format/webp/thumbnail/240x/" />
                  <p className='goods-title'>麦乐送*饿了么精选套餐</p>
                  <p className='goods-sales'>月售15 好评率100%</p>
                  <div>
                    <span><i className='iconfont icon-renminbi'></i>88.8</span>
                    <i className='iconfont icon-jia'></i>
                  </div>
                </li>
                <li>
                  <img alt="elem" src="//fuss10.elemecdn.com/1/5c/7b9cdd261290e3282037981a283c0png.png?imageMogr/format/webp/thumbnail/240x/" />
                  <p className='goods-title'>金拱门桶B组合</p>
                  <p className='goods-sales'>月售8 好评率60%</p>
                  <div>
                    <span><i className='iconfont icon-renminbi'></i>38.9</span>
                    <i className='iconfont icon-jia'></i>
                  </div>
                </li>
              </ul>
            </div>

            {/* 商品列表 */}
            <GoodsList></GoodsList>
        </div>
      </div>
    )
  }
}
