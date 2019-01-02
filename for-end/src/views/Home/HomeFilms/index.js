import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '@/components/Banner';
import './index.scss'
/*
  1. // 组件中要使用 仓库的数据，就得先做引入,
  2. 在构造函数中，调用 store.getState() 方法， 能返回仓库的 state (数据)
*/
import store from '@/store';

class HomeFilms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myCity: store.getState().city.curCity
    }

    store.subscribe(() => {
      console.log('仓库发生了变化');
      console.log(store.getState());
      this.setState({
        myCity: store.getState().city.curCity
      })
    })
  }



  render() {
    let zlCity = this.state.myCity || '北京市'
    return (
      <div className="films">
        <Link to="/city" className="city-fixed">{zlCity+' ∨'}</Link>
        <Banner></Banner>
        <div className="a">
          <div className="b"></div>
        </div>
      </div>
    )
  }
}

export default HomeFilms;
