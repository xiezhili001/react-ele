import React, { Component } from 'react';
import data from './dataList.json';
import './GoodsList.scss';

export default class GoodsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTab: 'cur-type-1',
      dataList: [],
      tabs: [
        { id: "cur-type-1", name: '热销' },
        { id: "cur-type-2", name: '面包' },
        { id: "cur-type-3", name: '吐司' },
        { id: "cur-type-4", name: '预包装' },
        { id: "cur-type-5", name: '咖啡' },
        { id: "cur-type-6", name: '奶茶' },
        { id: "cur-type-7", name: '奶霜/茶饮' },
        { id: "cur-type-8", name: '谷物奶/乳品' }
      ]
    }
  }
  tabChange(id) {
    this.setState({
      curTab: id
    });
  }
  componentDidMount() {
    this.setState({
      dataList: data
    })
  }
  render() {
    return (
      <div className='goods-list'>
        <ul className='goods-type'>
          {
            this.state.tabs.map((item, index) => {
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
            {
              this.state.dataList.map((item1, index1) => {
                return (
                  <div key={index1}>
                    <dt id={`/shopdetail/order/${index1 + 1}`}>{item1.category}</dt>
                    {
                      item1.products.map((item2, index2) => {
                        return (
                          <dd key={index2}>
                            <div className='goods-pic'>
                              <img src={item2.images[0]} alt='elem' />
                            </div>
                            <div className='goods-det'>
                              <h2>{item2.name}</h2>
                              <p>{item2.sku_detail[0].sku}</p>
                              <span>月售{item2.month_sales_count}份</span>
                              <h3>
                                <span>￥{item2.price}</span>
                                <i className='iconfont icon-jia'></i>
                              </h3>
                            </div>
                          </dd>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </dl>
        </div>
      </div>
    )
  }
}
