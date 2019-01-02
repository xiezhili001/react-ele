import React from 'react';
import { SearchBar } from 'antd-mobile';
import './index.scss'
import JSON from './cinema.json'

class HomeCinemas extends React.Component {



  render() {
    return (
      <div className="cinemas-list">
        <SearchBar placeholder="Search" maxLength={8} />
        <ul className="all-cinemas">
          {
            JSON.data.cinemas.map(item => {
              return (
                  <li className="cinemas-list-item" key={item.cinemaId}>

                    <div className="cinema-info-lf cinema-info">
                      <p className="cinema-name">{item.name}</p>
                      <p className="cinema-address">{item.address}</p>
                    </div>

                    <div className="cinema-info-rt cinema-info">
                      <div className="cinema-price">
                        <span>￥</span>
                        <span className="interge">{item.lowPrice/100}</span>
                        <span className="uspanon">起</span>
                      </div>
                      <span className="cinema-gpsAddress">距离未知</span>
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

export default HomeCinemas;
