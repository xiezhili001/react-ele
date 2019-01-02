import React, { Component } from 'react';
// import store from '../../store';
import { SearchBar } from 'antd-mobile';
import './index.scss'
import store from '../../store';
import JSON from './cityDetail.json'
// import { Toast} from 'antd-mobile'

export default class City extends Component {
  constructor(props) {
    super(props);

    // 这个地方只是默认从仓库中拿取数据。而仓库发生了变化，这行代码不会重复的执行
    this.state = {
      myCity: store.getState().city.curCity,
    }

    store.subscribe(() => {
      console.log('仓库发生了变化');
      this.setState({
        myCity: store.getState().city.curCity
      })
    })

  }


  changeCity(cityName) {
    store.dispatch({
      type: "SET_DETAILCITY",
      name: cityName
    })
  }

  goCity() {
    this.props.history.push('/city')
  }

  goBack(name) {
    if(typeof(name) == "string"){
      this.changeCity(name)
    }
    this.props.history.replace('/films')
  }

  render() {
    return (
      <div className="lv-cityDetail">

        <header>
          <i className="iconfont icon-fanhui" onClick={this.goBack.bind(this)}></i>
         选择收货地址{ this.state.myCity }
        </header>
        <div className="search">
          <div className="city" onClick={this.goCity.bind(this)}>{this.state.myCity} ∨</div>
          <SearchBar placeholder="Search" maxLength={8} />
        </div>
        <ul className="all-cinemas">
          {
            JSON.map(item => {
              return (
                  <li className="cinemas-list-item" key={item.request_id} onClick={this.goBack.bind(this,item.short_address)}>

                    <div className="cinema-info-lf cinema-info">
                      <p className="cinema-name">{item.name}</p>
                      <p className="cinema-address">{item.address}</p>
                    </div>

                    <div className="cinema-info-rt cinema-info">
                     {item.distance}
                    </div>

                  </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
