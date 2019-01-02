import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';

import './index.scss';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: [
        {
          "bannerId": 58,
          "imgUrl": "https://static.maizuo.com/5ae2f810304805f30364eec708b5f794.jpg"
        },
        {
          "bannerId": 25,
          "imgUrl": "https://static.maizuo.com/v5/upload/478f917b25402c3078dd0ba656243be8.jpg",
        }
      ]
    }
  }

  render() {
    return (
      <Carousel className="home-banner"
      infinite={true}>
      {
        this.state.banner.map(item => (
          <img key={item.bannerId} src={item.imgUrl} alt="" />
        ))
      }
    </Carousel>
    )
  }
}



export default Banner;
