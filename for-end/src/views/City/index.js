import React, { Component } from 'react';
import store from '../../store';
import { SearchBar } from 'antd-mobile';
import './index.scss'
import JSON from './cityName.json'
import { Toast} from 'antd-mobile'

export default class City extends Component {
  constructor(props) {
    super(props);

    // 这个地方只是默认从仓库中拿取数据。而仓库发生了变化，这行代码不会重复的执行
    this.state = {
      myCity: store.getState().city.curCity,
      arr: [],
      pageCity: []
    }
    // this.state = store.getState();

    // 监听 仓库的变化
    store.subscribe(() => {
      console.log('仓库发生了变化');
      console.log(store.getState());
      this.setState({
        myCity: store.getState().city.curCity
      })
    })
  }

  // 26字母
  getLetter() {
    for (var i = 0; i < 26; i++) {
      var letter = String.fromCharCode(65 + i);
      this.state.arr.push(letter);
    }
  }

  // 城市列表
  getCity() {
    let allCity = JSON.data.cities
    for (var i = 0; i < 26; i++) {
      // eslint-disable-next-line
      let arr1 = allCity.filter(item => {
        return item.pinyin.charAt(0) === this.state.arr[i].toLowerCase();
      });
      let obj = {'letter': this.state.arr[i],'city': arr1}
      if(arr1[0] !== undefined){
        this.state.pageCity.push(obj)
      }
    }
  }

  changeCity(cityName) {
    store.dispatch({
      type: "SET_CURCITY",
      name: cityName
    })
  }
  //锚点定位
  scrollToAnchor = (anchorName) => {
    Toast.info(anchorName, 0.6)
    if (anchorName) {
        // 找到锚点
        let anchorElement = document.getElementById(anchorName);
        // 如果对应id的锚点存在，就跳转到锚点
        if(anchorElement) {
          anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'});
        }

    }

  }

  goBack() {
    this.props.history.replace('/films')
  }

  componentWillMount() {
    this.getLetter()
    this.getCity()
  }

  render() {
    return (
      <div className="lv-city">

        <header>
          <i onClick={this.goBack.bind(this)}>×</i>
          当前城市-{ this.state.myCity }
        </header>
        <SearchBar placeholder="Search" maxLength={8} />
        <div className="lv-indexlist">
          <ul className="lv-indexlist__content">
            {
               this.state.pageCity.map((item,index) => {
                return (
                  <li
                  key={index}
                  className="lv-indexsection">
                    <p className="lv-indexsection__index"
                    id={this.state.pageCity[index].letter}
                    >
                     {item.letter}
                    </p>
                    <ul>
                      {
                        this.state.pageCity[index].city.map((item,index) => {
                          return (
                            <li
                            key={index}
                            onClick={this.changeCity.bind(this, item.name)}>
                              {item.name}
                            </li>
                          )

                        })
                      }
                    </ul>
                  </li>
                )
              })
            }
          </ul>
          <div className="lv-indexlist__nav">
            <ul>
              {
                this.state.pageCity.map((item,index) => {
                  return (
                    <li onClick={()=>this.scrollToAnchor(this.state.pageCity[index].letter)}
                    key={index}>
                      {item.letter}
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
