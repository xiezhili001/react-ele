import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './index.scss';
class UpdateUsername extends Component {
  render() {
    return (
      <div className="gao-username">
        <div className="gao-username-update">
          <input type="text" placeholder="用户名">
          </input>
        </div>
        <div className="gao-username-info">
          <p>用户名只能修改一次(5-24个字)</p>
        </div>
        <a className="gao-username-sure" href="111">
          <p>确认修改</p>
        </a>
      </div>
    )
  }
}
export default UpdateUsername;
